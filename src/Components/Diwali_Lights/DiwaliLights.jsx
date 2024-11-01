/**
 * Diwali Lights Management System
 * 
 * This main component handles the Diwali light show, allowing users to control
 * multiple lighting patterns with options to start, pause, resume, or end the show.
 * Users can adjust individual light patterns and interval durations, creating a 
 * personalized Diwali light display.
 */

import React, { useState } from "react";
import DiwaliLightsComponent from "./DiwaliLightsComponent";

const DiwaliLights = () => {
  const [startShow, setStartShow] = useState(false); // Controls the start/end of the light show
  const [pauseShow, setPauseShow] = useState(false); // Controls pause/resume functionality

  return (
    <div className="w-[80%] px-1 mt-10 m-auto">
      <h1 className="font-bold lg:text-3xl text-center mt-10 lg:w-full w-[50%] m-auto text-wrap ">
        Diwali Lights Management System
      </h1>

      <div className="lg:w-2/3 m-auto border lg:mt-20 mt-10 p-2 rounded-xl ">
        {/* Display two DiwaliLightsComponent instances for different light patterns */}
        {Array.from({ length: 2 }, (_, index) => (
          <DiwaliLightsComponent
            key={index}
            startShow={startShow}
            pauseShow={pauseShow}
          />
        ))}

        {/* Buttons to control the show (start/end and pause/resume) */}
        <div className="flex justify-center gap-3 my-3">
          {startShow && (
            <button
              className="p-2 m-2 w-[150px] bg-orange-500 rounded-xl text-black font-bold"
              onClick={() => setPauseShow((prev) => !prev)}
            >
              {pauseShow ? "Resume" : "Pause"} Show
            </button>
          )}

          <button
            className="p-2 m-2 w-[150px] bg-orange-500 rounded-xl text-black font-bold"
            onClick={() => setStartShow((prev) => !prev)}
          >
            {startShow ? "End" : "Start"} Show
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiwaliLights;
