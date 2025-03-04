import Page from "~/components/Page";
import Card from "~/components/Card";
import {Alert, Progress, TextInput} from "@mantine/core";
import Button from "~/components/ui/button/Button";
import {Group} from '@mantine/core';
import {Dropzone} from '@mantine/dropzone';
import {useState} from "react";
import {Icon} from "@iconify/react";
import axios from 'axios';

const generateRandom = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(23).substring(2, 5);

export default function Add() {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [dropzoneFilename, setDropzoneFilename] = useState<string | null>(null);

  const uploadFile = async (file: File) => {
    setDropzoneFilename(file.name);
    setIsUploading(true);

    const fileName = generateRandom();
    const chunkSize = 1024 * 1024; // 1MB
    const totalChunks = Math.ceil(file.size / chunkSize);

    await Promise.all(Array.from({length: totalChunks}).map(async (_, chunkIndex) => {
      const start = chunkIndex * chunkSize;
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);

      const formData = new FormData();
      formData.append("file", chunk);
      formData.append("chunkIndex", chunkIndex.toString());
      formData.append("totalChunks", totalChunks.toString());
      formData.append("fileName", fileName);

      try {
        const response = await axios.post("/upload", formData);
        setUploadProgress(Math.round(chunkIndex / totalChunks * 100));
      } catch(error) {
        console.error("Upload failed for chunk", chunkIndex, error);
        return;
      }
    })).then(() => {
      setIsUploading(false);
      setUploadProgress(100);
    });
  }

  return (
    <Page title={"Add"}>
      <Card>
        {isUploading && (
          <Alert className="mb-4"
                 variant="light"
                 color="blue"
                 radius="md"
                 title="Upload in progress"
                 icon={<Icon icon={"material-symbols-light:info-outline-rounded"}/>}
          >
            Hold on a second, the upload of the file is currently in progress... ({uploadProgress} %)
          </Alert>
        )}
        <TextInput
          size="md"
          label="Title"
          radius={"md"}
          className={"mb-4"}
          withAsterisk
          placeholder="Liveset title"
        />
        <Dropzone
          className={"mb-4"}
          loading={isUploading}
          disabled={dropzoneFilename !== null}
          onDrop={(files) => uploadFile(files[0])}
          onReject={(files) => console.log('rejected files', files)}
          accept={['audio/mpeg']}
        >
          <Group justify="center" gap="xl" mih={120} style={{pointerEvents: 'none'}}>
            <Dropzone.Idle>
              <Icon className={"text-5xl"} icon={"material-symbols-light:volume-down-outline"}/>
            </Dropzone.Idle>
            <div>
              {dropzoneFilename
                ? <>
                  <div>
                    Uploading...
                  </div>
                  <div>
                    <p className={"mb-4"}>{dropzoneFilename}</p>
                    <Progress className="mb-2" radius="xl" size="xl" value={uploadProgress} striped={isUploading} animated={isUploading}/>
                    <span>{uploadProgress} %</span>
                  </div>
                </>
                : <>
                  <div>
                    Drag audio here or click to select files
                  </div>
                  <div>
                    Please note that the liveset should be in mp3 format
                  </div>
                </>
              }
            </div>
          </Group>
        </Dropzone>
        <Button disabled={isUploading} size={"sm"}>Save</Button>
      </Card>
    </Page>
  );
}
