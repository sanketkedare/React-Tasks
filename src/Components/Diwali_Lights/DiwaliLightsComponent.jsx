import React, { useState } from "react";
import { BlinkingLights, FadingLights, StaticLights } from "./LightsPattern";

// Options available for lighting patterns
const OPTIONS = ["FADING", "BLINKING", "STATIC"];

const DiwaliLightsComponent = ({ pauseShow, startShow }) => {
  const [currentPattern, setCurrentPattern] = useState(OPTIONS[0]); // Selected light pattern
  const [duration, setDuration] = useState(1); // Interval duration for pattern effect

  // Function to render the selected light pattern
  const renderLightPattern = () => {
    if (!startShow) return null;
    switch (currentPattern) {
      case "FADING":
        return <FadingLights duration={duration} pause={pauseShow} setDuration={setDuration}/>;
      case "BLINKING":
        return <BlinkingLights duration={duration} pause={pauseShow} setDuration={setDuration}/>;
      default:
        return <StaticLights />;
    }
  };

  return (
    <div className="lg:flex justify-between p-2 lg:my-2 my-5">
      {/* Lights display based on selected pattern */}
      <div className="w-[100px] h-[50px] border rounded-xl lg:m-0 m-auto my-2">{renderLightPattern()}</div>

      {/* Dropdown to select the lighting pattern */}
      <div className="flex lg:gap-5 gap-2 items-center lg:justify-center justify-evenly">
        <label htmlFor="pattern my-2">Select Pattern : </label>
        <select
          id="pattern"
          className="text-black w-[100px] p-2 rounded-xl my-2"
          value={currentPattern}
          onChange={(e) => setCurrentPattern(e.target.value)}
        >
          {OPTIONS.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Input to set interval duration */}
      <div className="flex lg:gap-5 gap-2 items-center lg:justify-center justify-evenly">
        <label>Interval (sec) :</label>
        <input
          type="number"
          className="w-[100px] p-2 rounded-xl text-black"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          min="1"
          max="10"
        />
      </div>
    </div>
  );
};

export default DiwaliLightsComponent;
