import React, { useContext, useState } from "react";
import { GiEagleHead, GiTigerHead } from "react-icons/gi";
import { TicTacContext } from "./TicTacContextComponent";

/**
 * SingleBox Component
 * This component represents each box on the Tic Tac Toe board.
 * It captures player clicks and updates the game state.
 */
const SingleBox = ({ i }) => {
  const { turn, setTurn, handelerChoices } = useContext(TicTacContext);
  
  const [clickedBy, setClickedBy] = useState(false); // Track if the box has been clicked

  const handlerClick = () => {
    let player = turn ? "eagle" : "tiger";
    if (clickedBy) return; // Prevent further clicks if the box is already selected

    setTurn(!turn); // Toggle turn
    setClickedBy(player); // Mark the box with the current player's choice
    handelerChoices(player, i + 1); // Update choices for the current player
  };

  return (
    <div
      className={`border rounded-xl flex justify-center items-center cursor-pointer lg:w-[140px] lg:h-[140px] h-[100px]`}
      onClick={handlerClick}
    >
      {clickedBy ? (
        clickedBy === "eagle" ? (
          <GiEagleHead className="text-[50px]" />
        ) : (
          <GiTigerHead className="text-[50px] text-yellow-600" />
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleBox;
