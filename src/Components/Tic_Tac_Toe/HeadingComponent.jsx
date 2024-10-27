import React, { useContext } from "react";
import { MdRestartAlt } from "react-icons/md";
import { TicTacContext } from "./TicTacContextComponent";

/**
 * HeadingComponent
 * This component displays the current player's turn and a restart button.
 */
const HeadingComponent = () => {
  const { turn, restartGame } = useContext(TicTacContext);
  
  return (
    <div>
      <h1 className="text-center font-bold lg:text-2xl my-5">
        <span
          className={`font-bold ${
            !turn && "bg-white text-black"
          } rounded-xl p-3 w-[200px] mx-3`}
        >
          Tiger
        </span>
        VS
        <span
          className={`font-bold ${
            turn && "bg-white text-black"
          } rounded-xl p-3 w-[200px] mx-3`}
        >
          Eagle
        </span>
      </h1>
      <button
        onClick={restartGame}
        className="bg-red-600 text-left p-2 m-1 mt-5 rounded-xl text-white bg-opacity-50 flex items-center gap-2 hover:bg-black hover:text-white border"
      >
        <MdRestartAlt />
        Restart Game
      </button>
    </div>
  );
};

export default HeadingComponent;
