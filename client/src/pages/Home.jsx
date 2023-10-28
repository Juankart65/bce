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
      <div className="flex items-center justify-center mt-8 flex-row">
         <h1 className="flex font-bold text-inherit text-2xl text-[#000]">Video</h1>
      </div>
      <div className="player-wrapper flex flex-col items-center justify-center mt-10 ml-4">
        <ReactPlayer
          className = "react-player"
          width="97%"
          height="90%"
          url="https://www.youtube.com/watch?v=tk58kTbcGx4&pp=ygURbWFyaXBvc2FzIHZvbGFuZG8%3D"
          controls
          loop />
      </div>
      <div className="flex items-center justify-center mt-8 flex-row">
         <h1 className="flex font-bold text-inherit text-2xl text-[#000]">Video</h1>
      </div>
      <div className="player-wrapper flex flex-col items-center justify-center mt-10 ml-4">
        <ReactPlayer
          className = "react-player"
          width="97%"
          height="90%"
          url="https://www.youtube.com/watch?v=EtmgJEAoCQI&pp=ygUFZ2F0b3M%3D"
          controls
          loop />
      </div>
    </>
  );
}