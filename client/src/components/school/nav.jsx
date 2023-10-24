import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <div>
        </div>
        <Link className="font-bold text-inherit text-3xl text-[#000]" href="/">
          Colegio
        </Link>
      </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Misión
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Visión
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Infraestructura
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
