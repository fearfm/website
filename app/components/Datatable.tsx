import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import type {ReactNode} from "react";
import {twMerge} from "tailwind-merge";
import {Link} from "react-router";
import {Icon} from "@iconify/react";
import PaginationButton from "~/components/PaginationButton";

interface IColumn {
  accessor: string;
  title: string;
  render?: (row: any) => ReactNode;
}

interface IProps {
  page: number;
  totalRows: number;
  highlightHover?: boolean;
  data: Array<any>;
  columns: Array<IColumn>;
  showPaging?: boolean;
}

interface IPage {
  page: number;
  active: boolean;
}

export const PAGE_SIZE = 10;

export default function Datatable({
                                    page = 1,
                                    totalRows = -1,
                                    highlightHover = false,
                                    showPaging = true,
                                    data,
                                    columns
                                  }: IProps
) {
  const maxPages = Math.ceil(totalRows / PAGE_SIZE);

  const getAvailablePages = (page: number): Array<IPage> => {
    const pages: Array<IPage> = [];
    let startChunkBegin = page > 3 ? (page - 3) : 1;
    console.log(startChunkBegin);
    let endChunkBegin = page > 3 ? page + 3 : 7;
    if (endChunkBegin > maxPages) {
      endChunkBegin = maxPages;
    }
    if (endChunkBegin - startChunkBegin < 7) {
      startChunkBegin = endChunkBegin - 6;
    }
    if (startChunkBegin < 1) {
      startChunkBegin = 1;
    }

    for (let i = startChunkBegin; i <= endChunkBegin; i++) {
      pages.push({
        page: i,
        active: page === i,
      })
    }

    return pages;
  }

  return (
    <>
      <Table className={"table-auto"}>
        <TableHeader className="bg-gray-50 border-b border-gray-100 dark:border-white/[0.05]">
          <TableRow>
            {columns.map((column, i) => {
              return (
                <TableCell
                  key={i}
                  isHeader
                  className="px-6 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  {column.title}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05] border-b border-gray-100">
          {data.map((row) => {
            return (
              <TableRow key={row.id}
                        className={twMerge(
                          highlightHover ? 'hover:bg-gray-50' : ''
                        )}
              >
                {columns.map((rowColumn, i) => {
                  return (
                    <TableCell className="px-6 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      {rowColumn.render
                        ? rowColumn.render(row)
                        : row[rowColumn.accessor]
                      }
                    </TableCell>
                  );
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      {showPaging && (
        <div className={"flex justify-center py-4"}>
          <ul className="hidden items-center gap-0.5 sm:flex">
            <PaginationButton
              value={<Icon className="text-lg" icon={"material-symbols-light:keyboard-double-arrow-left"}/>}
              page={(page-1)}
              active={false}
              disabled={page < 2}
            />
            {getAvailablePages(page).map((page, i) => {
              return <PaginationButton page={page.page} active={page.active} disabled={false}/>
            })}
            <PaginationButton
              value={<Icon className="text-lg" icon={"material-symbols-light:keyboard-double-arrow-right"}/>}
              page={(page+1)}
              active={false}
              disabled={page > (maxPages - 1)}
            />
          </ul>
        </div>
      )}
    </>
  );
}