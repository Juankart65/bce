import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Mision from "./Mision";
import Vision from "./Vision"


export default function App() {
  return (
    <Navbar className="mb-10 w-full flex flex-row">
      <NavbarBrand>
        <div>
        </div>
        <Link className="flex font-bold text-inherit text-2xl text-[#000]" href="/">
          Colegio
        </Link>
      </NavbarBrand>
    <NavbarContent className="flex gap-4 " justify="center">
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
