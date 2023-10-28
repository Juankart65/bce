import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Options() {
  const [selected, setSelected] = React.useState("login");
  const list = [
    {
      title: "Filosofía",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/v1698450205/Colegio/hqwvbvoia7jfkggtx3zr.jpg`,
    },
    {
      title: "Justificación de Nuestra Fundación",
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
      title: "Sobre Nosotros",
      img: `https://res.cloudinary.com/dsnq0pvey/image/upload/v1698450204/Colegio/xffl4p2lhe3vnhvqmzgr.jpg`,
    },
  ];

  return (
    <div className="gap-y-7 flex md:grid md:grid-cols-3 flex-col justify-center items-center md:ml-24">
      {list.map((item, index) => (
        <Link to={`/${item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "_")}`} key={index}>
        <Card
            isBlurred="true"
            shadow="sm"
            key={index}
            isPressable={true}
          className="flex w-2/3"
              
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
      </Link>
      ))}
    </div>
  );
}
