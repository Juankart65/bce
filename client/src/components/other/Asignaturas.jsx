import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
    {
    key: "1",
    asignaturas: "Matematicas",
    enfoqueD: "BMX",
    enfoqueA: "Danza",
    },
    {
    key: "2",
    asignaturas: "Español",
    enfoqueD: "Fútbol",
    enfoqueA: "Teatro",
    },
    {
    key: "3",
    asignaturas: "Ciencias Naturales",
    enfoqueD: "Natación",
    },
    {
    key: "4",
    asignaturas: "Ciencias Sociales",
    enfoqueD: "Patinaje",
    },
    {
    key: "5",
    asignaturas: "Inglés",
    enfoqueD: "Voleibol",
    },
    {
    key: "6",
    enfoqueD: "Atletismo",
    },
    {
    key: "7",
    enfoqueD: "Tenis de Campo",
    },
    {
    key: "8",
    enfoqueD: "Ajedrez",
    },
    {
    key: "9",
    enfoqueD: "Baloncesto",
    },
];

const columns = [
  {
    key: "asignaturas",
    label: "ASIGNATURAS",
  },
  {
    key: "enfoqueD",
    label: "ENFOQUE DEPORTIVO",
  },
  {
    key: "enfoqueA",
    label: "ENFOQUE ARTÍSTICO",
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
