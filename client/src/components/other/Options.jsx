import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Options() {
  const navigate = useNavigate();
  const list = [
    {
      title: "Filosofía",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/v1698450205/Colegio/hqwvbvoia7jfkggtx3zr.jpg`,
    },
    {
      title: "Justificación",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/v1698450204/Colegio/ag8jedjelikvorst4eys.jpg`,
    },
    {
      title: "Propósitos",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/v1698450204/Colegio/uqnmhbt6uqtkmvqsgn2l.jpg`,
    },
    {
      title: "Grados que Ofertamos",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/v1698450204/Colegio/y6yf2zlgfdxgozkanmzq.jpg`,
    },
    {
      title: "Población",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/v1698450204/Colegio/tisjllwkvkn5d5s3bjjg.jpg`,
    },
    {
      title: "Modelo, Metódo Educativo y Requisitos Legales",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/v1698450204/Colegio/dqejr5j1tlrkvfagjqar.jpg`,
    },
    {
      title: "Currículo",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/v1699132544/Colegio/l3g2frekvhclak7yyp5a.jpg`,
    },
    {
      title: "Sobre Nosotros",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/v1698450204/Colegio/xffl4p2lhe3vnhvqmzgr.jpg`,
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
