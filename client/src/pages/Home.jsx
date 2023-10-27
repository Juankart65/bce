import React from "react";
import Options from "../components/other/Options";

export default function Home() {
  return (
    <>
      <div
        className="flex items-center justify-center h-screen m-6 w-full"
        id="home"
      >
        <Options />
      </div>
    </>
  );
}