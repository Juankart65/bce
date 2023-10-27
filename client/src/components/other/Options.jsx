import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Options() {
const baseImagePath = "./src/assets/img";
  const list = [
    {
      title: "Filosofía",
      img: `${baseImagePath}/img1.jpg`,
    },
    {
      title: "Justificación de Nuestra Fundación",
      img: `${baseImagePath}/img4.jpg`,
    },
    {
      title: "Propósitos",
      img: `${baseImagePath}/img5.jpg`,
    },
    {
      title: "Grados que Ofertamos",
      img: `${baseImagePath}/img2.jpg`,
    },
    {
      title: "Población",
      img: `${baseImagePath}/img7.jpg`,
    },
    {
      title: "Modelo, Metódo Educativo y Requisitos Legales",
      img: `${baseImagePath}/img3.jpg`,
    },
    {
      title: "Sobre Nosotros",
      img: `${baseImagePath}/img6.jpg`,
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-3 sm:grid-cols-4">
      {list.map((item, index) => (
          <Card
            isBlurred="true"
            shadow="sm"
            key={index}
              isPressable={true}
              className = "flex"
          >
          <CardBody className="overflow-visible p-0">
            <img
              src={item.img}
              alt={item.title}
              className="  rounded-xl shadow-md"
            />
          </CardBody>
          <CardFooter className="text-xl justify-center">
            <b className="text-blue-500">{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
