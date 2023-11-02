import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Mision from "./Mision";
import Vision from "./Vision"


export default function App() {
  return (
    <Navbar className="mb-10 h-24 md:h-full md:w-full flex flex-row">
      <NavbarBrand className="flex flex-row">
        <div className="flex flex-row w-8 md:w-16">
          <img
            src="https://res.cloudinary.com/dsnq0pvey/image/upload/v1698968376/Colegio/ic5flpkpiexhkyirs1k2.png"
            alt="BCE"
            className="text"
          />
        </div>
        <Link className="flex flex-col font-bold text-inherit md:text-2xl text-blue-500" href="/">
          Colegio Campestre
          <h1>`Las Palmas`</h1>
        </Link>
      </NavbarBrand>
    <NavbarContent className="flex flex-row gap-10 " justify="center">
        <NavbarItem>
          <Mision />
        </NavbarItem>
        <NavbarItem>
          <Vision />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
