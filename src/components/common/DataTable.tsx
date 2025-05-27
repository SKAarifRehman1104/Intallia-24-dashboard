import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Column<T> {
  key: keyof T | string;
  header: React.ReactNode;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string;
  selectable?: boolean;
  actions?: (row: T) => React.ReactNode;
}

export function DataTable<T>({
  data = [],
  columns,
  rowKey,
  selectable = false,
  actions,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map(rowKey));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id)
        ? prev.filter((rowId) => rowId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="rounded-md overflow-x-auto">
      <Table className="table-fixed w-full border-collapse">
        <TableHeader>
          <TableRow className="bg-[#F9FAFB]">
            {selectable && (
              <TableHead className="w-12 text-center">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="mx-auto"
                />
              </TableHead>
            )}
            {columns.map((col) => (
              <TableHead
                key={String(col.key)}
                className={`${
                  col.className || "text-sm"
                } px-4 py-3 text-left min-w-[120px]`}
              >
                {col.header}
              </TableHead>
            ))}
            {actions && (
              <TableHead className="w-20 text-center">Action</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => {
            const id = rowKey(row);
            return (
              <TableRow key={id} className="text-sm">
                {selectable && (
                  <TableCell className="w-12 text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(id)}
                      onChange={() => handleSelectRow(id)}
                      className="mx-auto"
                    />
                  </TableCell>
                )}
                {columns.map((col) => (
                  <TableCell
                    key={String(col.key)}
                    className={`${
                      col.className || "py-4 text-sm"
                    } px-4 break-words min-w-[120px]`}
                    style={{
                      maxWidth: "200px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {col.render
                      ? col.render(row)
                      : String(row[col.key as keyof T] ?? "")}
                  </TableCell>
                ))}
                {actions && (
                  <TableCell className="w-20 text-center">
                    {actions(row)}
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
