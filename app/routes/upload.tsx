import type {Route} from './+types/upload';
import fs from "fs";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "uploads");

async function mergeChunks(fileId: string, totalChunks: number): Promise<void> {
  const finalFilePath = path.join(UPLOAD_DIR, `${fileId}.mp3`);
  const writeStream = fs.createWriteStream(finalFilePath);

  for (let i = 0; i < totalChunks; i++) {
    const chunkPath = path.join(UPLOAD_DIR, `${fileId}.part${i}`);

    if (!fs.existsSync(chunkPath)) {
      console.error(`Chunk missing: ${chunkPath}`);
      return;
    }

    const chunkData = await fs.promises.readFile(chunkPath);
    writeStream.write(chunkData);
    await fs.promises.unlink(chunkPath); // Delete chunk after merging
  }

  writeStream.end();
  console.log(`File ${fileId} merged successfully!`);
}

async function areAllChunksUploaded(fileId: string, totalChunks: number): Promise<boolean> {
  const files = await fs.promises.readdir(UPLOAD_DIR);
  const chunkFiles = files.filter((file) => file.startsWith(`${fileId}.part`));
  return chunkFiles.length === totalChunks;
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  const fileName = formData.get("fileName") as string;
  const chunkIndex = parseInt(formData.get("chunkIndex") as string, 10);
  const totalChunks = parseInt(formData.get("totalChunks") as string, 10);

  const data = Object.fromEntries(formData);

  const filePath = path.join(UPLOAD_DIR, `${fileName}.part${chunkIndex}`);

  const chunkData = Buffer.from(await file.arrayBuffer());
  fs.appendFileSync(filePath, chunkData);

  // Check if all chunks exist
  if (await areAllChunksUploaded(fileName, totalChunks)) {
    console.log('all done!');
    await mergeChunks(fileName, totalChunks);
  }

  return {
    upload: true,
    data: data,
  }
}