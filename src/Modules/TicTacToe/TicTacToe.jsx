import React, { useEffect, useState } from "react";
import SingleBox from "./SingleBox";
import HeadingComponent from "./HeadingComponent";
import ResultComponent from "./ResultComponent";
import Button from "./Button";
import { winningCombinations } from "./utils";

/**
 * TicTacToe Component
 * This component renders the Tic Tac Toe game.
 * It manages the game state, handles player turns, and determines the winner.
 */
const TicTacToe = () => {
  const [start, setStart] = useState(false); // State to track if the game has started
  const [turn, setTurn] = useState(false); // State to track whose turn it is
  const [restart, setRestart] = useState(true); // State to control the restart button
  const [endGame, setEndGame] = useState(true); // State to track if the game has ended

  // Choices for players
  const [tiger, setTiger] = useState([]); // Tiger's selected boxes
  const [eagle, setEagle] = useState([]); // Eagle's selected boxes

  const arr = Array(9).fill(0); // Initialize an array for the 9 boxes of the Tic Tac Toe board

  // Function to restart the game
  const restartGame = () => {
    setTurn(false);
    setRestart(false);
    setTimeout(() => {
      setRestart(true);
    }, 1000);

    setTiger([]); // Reset Tiger's choices
    setEagle([]); // Reset Eagle's choices
  };

  // Handle player choices
  const handelerChoices = (player, box) => {
    player === "eagle"
      ? setEagle((prev) => [...prev, box]) // Update Eagle's choices
      : setTiger((prev) => [...prev, box]); // Update Tiger's choices
  };

  // Function to determine the winner
  const handelerWinner = () => {
    for (let combination of winningCombinations) {
      if (combination.every((index) => tiger.includes(index))) {
        setEndGame("Tiger Won !!");
        restartGame();
        return;
      }
      if (combination.every((index) => eagle.includes(index))) {
        setEndGame("Eagle Won !!");
        restartGame();
        return;
      }
    }

    // Check for a draw
    if (tiger.length + eagle.length === 9) {
      setEndGame("It's a Draw!");
      restartGame();
      return;
    }
  };

  useEffect(() => {
    handelerWinner(); // Check for a winner whenever choices change
  }, [tiger, eagle]);

  useEffect(() => {
    setTimeout(() => {
      setEndGame(false); // Reset end game state after a delay
    }, 2000);
  }, [endGame]);

  return (
    <div className="lg:w-[80%] m-auto mt-10 relative">
      {endGame && <ResultComponent setEndGame={setEndGame} endGame={endGame} />}

      <h1 className="font-bold lg:text-3xl text-xl text-center">
        Tic Tac Toe Game
      </h1>

      {/* Button to start the game */}
      <Button start={start} setStart={setStart} />

      {/* Game Board */}
      {start && (
        <>
          {/* Heading to show current turn and restart option */}
          <HeadingComponent turn={turn} restartGame={restartGame} />

          {/* Render Tic Tac Toe Board */}
          {restart && (
            <div className="border lg:w-[450px] lg:h-[450px] my-2 m-auto rounded-xl text-white grid grid-cols-3 p-2 gap-2">
              {arr.map((_, index) => (
                <SingleBox
                  i={index + 1}
                  key={index}
                  turn={turn}
                  setTurn={setTurn}
                  handelerChoices={handelerChoices}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TicTacToe;
