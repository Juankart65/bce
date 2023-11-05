import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button className="text-blue-500">Visión</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-2xl font-bold ">Visión</div>
          <div className="text-lg flex flex-col gap-3 md:gap-6 mt-6">
            <p>Ser un oasis de aprendizaje en medio de la naturaleza,
              donde los estudiantes florecen tanto en lo académico como en lo deportivo. Aspiramos a formar individuos completos, capaces de sobresalir en sus estudios mientras desarrollan
              habilidades físicas y mentales a través del deporte. Nuestra visión es ser un centro educativo líder que inspira la excelencia, el espíritu deportivo y los valores fundamentales en la vida
              de nuestros estudiantes. Aquí, cada estudiante encuentra un camino hacia el éxito en un entorno
              campestre que fomenta el crecimiento y la comunidad.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
