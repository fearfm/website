import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import {Avatar} from "@mantine/core";

interface RecentTrack {
  id: number; // Unique identifier for each product
  name: string; // Product name
  liveset: string; // Category of the product
  date: Date; // Price of the product (as a string with currency symbol)
  image: string; // URL or path to the product image
}

// Define the table data using the interface
const tableData: RecentTrack[] = [
  {
    id: 1,
    name: "Artist - My title",
    liveset: 'My random liveset name',
    date: new Date(),
    image: "/images/product/product-01.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Artist - My title",
    liveset: 'My random liveset name',
    date: new Date(),
    image: "/images/product/product-02.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Artist - My title",
    liveset: 'My random liveset name',
    date: new Date(),
    image: "/images/product/product-03.jpg", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Artist - My title",
    liveset: 'My random liveset name',
    date: new Date(),
    image: "/images/product/product-04.jpg", // Replace with actual image URL
  },
  {
    id: 5,
    name: "Artist - My title",
    liveset: 'My random liveset name',
    date: new Date(),
    image: "/images/product/product-05.jpg", // Replace with actual image URL
  },
];

export default function RecentTracksChart() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent tracks
          </h3>
        </div>

        <div className="flex items-center gap-3">
          {/* Buttons can be added here */}
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Track
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Date
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((product) => (
              <TableRow key={product.id} className="">
                <TableCell className="py-3">
                  <div className={"flex items-center"}>
                    <Avatar color="cyan" radius="sm">
                      AA
                    </Avatar>
                    <div className={"ml-2"}>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {product.name}
                      </p>
                      <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                        {product.liveset}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.date.getUTCDate().toString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
