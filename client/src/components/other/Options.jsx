import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Options() {
  const navigate = useNavigate();
  const list = [
    {
      title: "Filosofía",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/hqwvbvoia7jfkggtx3zr`,
    },
    {
      title: "Justificación",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/ag8jedjelikvorst4eys`,
    },
    {
      title: "Propósitos",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/uqnmhbt6uqtkmvqsgn2l`,
    },
    {
      title: "Grados que Ofertamos",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/y6yf2zlgfdxgozkanmzq`,
    },
    {
      title: "Población",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/tisjllwkvkn5d5s3bjjg`,
    },
    {
      title: "Modelo, Metódo Educativo y Requisitos Legales",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/dqejr5j1tlrkvfagjqar`,
    },
    {
      title: "Currículo, Organización y Perfil Docente",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/l3g2frekvhclak7yyp5a`,
    },
    {
      title: "Inscripciones y Tarifas",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/flyd5fbvrvm8sxyt305l`,
    },
    {
      title: "Sobre Nosotros",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/f_auto,q_auto/v1/Colegio/xffl4p2lhe3vnhvqmzgr`,
    },
  ];

  return (
    <div className="gap-y-7 flex md:grid md:grid-cols-3 flex-col justify-center items-center md:ml-24">
      {list.map((item, index) => (
        <Card
            isBlurred="true"
            shadow="sm"
            key={index}
            isPressable={true}
          className="flex w-2/3"
           onClick={() => {
              navigate(`/${item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "_")}`)}}
              
          >
          <CardBody className="overflow-visible p-0">
            <img
              src={item.img}
              alt={item.title}
              className=" rounded-small md:rounded-xl shadow-md"
            />
          </CardBody>
          <CardFooter className="text-xl justify-center">
            <b className="text-blue-500">{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
