import React from "react";
import Options from "../components/other/Options";
import ReactPlayer from "react-player"


export default function Home() {
  return (
    <>
      <div
        className="flex items-center justify-center"
        id="home"
      >
        <Options />
      </div>
      <div className="flex items-center justify-center mt-20 flex-row">
         <h1 className="flex font-bold text-inherit text-4xl text-[#000]"><b>Deportes que se practican en el Colegio Campestre Las Palmas</b></h1>
      </div>
      <div className="player-wrapper flex flex-col items-center justify-center mt-10 ml-4">
        <ReactPlayer
          className = "react-player"
          width="97%"
          height="90%"
          url="https://youtu.be/0JHnJdnoG54?si=EeZ5fPoQJXm_-EYn"
          controls
          loop />
      </div>
    </>
  );
}