import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    tipo: "Matrícula",
    tarifa: "$ 400000",
  },
  {
    key: "2",
    tipo: "Mensualidad Transición",
    tarifa: "$ 300000",
    },
  {
    key: "3",
    tipo: "Mensualidad Primaria",
    tarifa: "$ 350000",
  },
];

const columns = [
  {
    key: "tipo",
    label: "Tipo",
  },
  {
    key: "tarifa",
    label: "Tarifa (Pesos)",
  },
];

export default function App() {
  return (
    <Table className="text-blue-500 flex items-center justify-center w-unit-7xl md:w-full">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
