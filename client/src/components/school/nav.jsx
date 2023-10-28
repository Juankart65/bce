import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Mision from "./Mision";
import Vision from "./Vision"


export default function App() {
  return (
    <Navbar className="mb-10 h-24 md:h-full md:w-full flex flex-row">
      <NavbarBrand>
        <div>
        </div>
        <Link className="flex font-bold text-inherit text-2xl text-[#000]" href="/">
          Colegio
        </Link>
      </NavbarBrand>
    <NavbarContent className="flex gap-10 " justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            <Mision />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Vision />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
