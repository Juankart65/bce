import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button className="text-blue-500">Misión</Button>
      </PopoverTrigger>
      <PopoverContent placement="bottom-start">
        <div className="px-1 py-2">
          <div className="text-2xl font-bold">Misión</div>
          <div className="text-lg flex flex-col gap-3 md:gap-6 mt-6">
            <p>
            El Colegio Campestre Las Palmas es una institución educativa privada
            comprometida a proporcionar una educación integral que combine formación académica de calidad
            con una sólida base en disciplina y principios. Valoramos tanto la formación académica como el
            desarrollo deportivo de nuestros estudiantes. Queremos asegurarnos de que los alumnos tengan la
            oportunidad de sobresalir en ambos campos. Esta misión tiene como objetivo fomentar un equilibrio
            saludable entre la formación académica y deportiva, promoviendo el rendimiento académico, el
            bienestar físico y el espíritu de equipo.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
