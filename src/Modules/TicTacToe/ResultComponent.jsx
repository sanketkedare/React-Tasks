import React from "react";
import { BsTrophy } from "react-icons/bs";

/**
 * ResultComponent
 * This component displays the result of the game and allows the user to reset the game.
 */
const ResultComponent = ({ setEndGame, endGame }) => {
  return (
    <div
      className="w-[90%] h-[90vh] left-10 bg-gray-800 rounded-xl absolute flex justify-center items-center"
      onClick={() => setEndGame(false)}
    >
      <div className="m-auto w-full text-center">
        <span className="text-5xl">{endGame}</span>
        <BsTrophy className="text-[100px] text-center m-auto text-yellow-500 p-2 my-4" />
      </div>
    </div>
  );
};

export default ResultComponent;
