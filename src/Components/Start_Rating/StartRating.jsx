import React, { useState } from "react";
import ShowStars from "./ShowStarts";
import { colors, faces } from "./utils";

const StartRating = () => {
  const [rate, setRate] = useState(0);

  return (
    <div className="m-auto lg:w-[80%] mt-10">
      <h1 className="font-bold lg:text-3xl text-xl text-center">Star Rating</h1>

      {/* Rating Display */}
      <div
        style={{ background: colors[rate].hex, color: colors[rate].text }}
        className="relative m-auto lg:w-[400px] rounded-xl h-[200px] my-16 flex flex-col justify-center gap-8 items-center shadow-lg"
      >
        <h1 className=" top-1 left-1 text-5xl font-semibold">{faces[rate]}</h1>

        <ShowStars rate={rate} setRate={setRate} />
      </div>

      {/* Input Range */}
      <div className="lg:w-[500px] h-[100px] m-auto">
        <h1 className="text-center text-2xl font-bold p-3">Choose Input</h1>
        <input
          className="w-full cursor-pointer"
          type="range"
          max={5}
          min={0}
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
        <h1 className="text-center text-xl font-semibold text-gray-400">You Rate : {rate}</h1>
      </div>
    </div>
  );
};

export default StartRating;
