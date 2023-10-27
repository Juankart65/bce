import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Options() {
  const list = [
    {
      title: "Filosofía",
      img: "/src/assets/img/img1.jpg",
    },
    {
      title: "Justificación de Nuestra Fundación",
      img: "/src/assets/img/img4.jpg",
    },
    {
      title: "Propósitos",
      img: "/src/assets/img/img5.jpg",
    },
    {
      title: "Grados que Ofertamos",
      img: "/src/assets/img/img2.jpg",
    },
    {
      title: "Población",
      img: "/src/assets/img/img7.jpg",
    },
    {
      title: "Modelo, Metódo Educativo y Requisitos Legales",
      img: "/src/assets/img/img3.jpg",
    },
    {
      title: "Sobre Nosotros",
      img: "/src/assets/img/img6.jpg",
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
