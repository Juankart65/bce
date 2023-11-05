import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    niveles: "Transición",
    numero: "30",
    descripcion: "2 grupos con 15 estudiantes por aula",
  },
  {
    key: "2",
    niveles: "Básica Primaria",
    numero: "100",
    descripcion: "1 grupo por cada grado, es decir, 20 estudiantes por aulas",
  },
];

const columns = [
  {
    key: "niveles",
    label: "NIVELES EDUCATIVOS",
  },
  {
    key: "numero",
    label: "NÚMERO DE ESTUDIANTES",
  },
  {
    key: "descripcion",
    label: "DESCRIPCIÓN",
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
