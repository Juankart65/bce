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
         <h1 className="text-blue-500 text-2xl ">Video</h1>
      </div>
      <div className="player-wrapper flex items-center justify-center mt-10 mb-8 ml-10">
       
        <ReactPlayer
          className = "react-player"
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=ugp2hjSycmk&ab_channel=TechRiders-Espa%C3%B1a-"
          loop/>
      </div>
    </>
  );
}