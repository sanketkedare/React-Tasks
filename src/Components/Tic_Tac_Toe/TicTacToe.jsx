import React, { useContext, useEffect, useState } from "react";
import SingleBox from "./SingleBox";
import HeadingComponent from "./HeadingComponent";
import ResultComponent from "./ResultComponent";
import Button from "./Button";
import { winningCombinations } from "./utils";
import { TicTacContext } from "./TicTacContextComponent";

/**
 * TicTacToe Component
 * This component renders the Tic Tac Toe game.
 * It manages the game state, handles player turns, and determines the winner.
 */
const TicTacToe = () => {
  const { endGame, start, restart } = useContext(TicTacContext);

  const arr = Array(9).fill(0); // Initialize an array for the 9 boxes of the Tic Tac Toe board

  return (
    <div className="lg:w-[80%] m-auto mt-10 relative">
      {endGame && <ResultComponent />}

      <h1 className="font-bold lg:text-3xl text-xl text-center">
        Tic Tac Toe Game
      </h1>

      {/* Button to start the game */}
      <Button />

      {/* Game Board */}
      {start && (
        <>
          {/* Heading to show current turn and restart option */}
          <HeadingComponent />

          {/* Render Tic Tac Toe Board */}
          {restart && (
            <div className="border lg:w-[450px] lg:h-[450px] my-2 m-auto rounded-xl text-white grid grid-cols-3 p-2 gap-2">
              {arr.map((_, index) => (
                <SingleBox i={index} key={index}/>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TicTacToe;
