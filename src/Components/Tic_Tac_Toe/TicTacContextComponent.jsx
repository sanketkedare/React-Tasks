import React, { createContext, useEffect, useState } from "react";
import { winningCombinations } from "./utils";

export const TicTacContext = createContext();

const TicTacContextComponent = ({ children }) => {
  const [start, setStart] = useState(false); // State to track if the game has started
  const [turn, setTurn] = useState(false); // State to track whose turn it is
  const [restart, setRestart] = useState(true); // State to control the restart button
  const [endGame, setEndGame] = useState(true); // State to track if the game has ended

  // Choices for players
  const [tiger, setTiger] = useState([]); // Tiger's selected boxes
  const [eagle, setEagle] = useState([]); // Eagle's selected boxes

  // Function to restart the game
  const restartGame = () => {
    setTurn(false);
    setRestart(false);
    setEndGame(true); // Clear the end game message right away
    setTimeout(() => {
      setRestart(true);
      setTiger([]); // Reset Tiger's choices
      setEagle([]); // Reset Eagle's choices
    }, 1000);
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
        setTimeout(restartGame, 2000); // Delay restart to show message
        return;
      }
      if (combination.every((index) => eagle.includes(index))) {
        setEndGame("Eagle Won !!");
        setTimeout(restartGame, 2000); // Delay restart to show message
        return;
      }
    }

    // Check for a draw
    if (tiger.length + eagle.length === 9) {
      setEndGame("It's a Draw!");
      setTimeout(restartGame, 2000); // Delay restart to show message
      return;
    }
  };

  useEffect(() => {
    handelerWinner();
  }, [tiger, eagle]);

  useEffect(() => {
    setTimeout(() => {
      setEndGame(false); // Reset end game state after a delay
    }, 2000);
  }, [endGame]);

  return (
    <TicTacContext.Provider
      value={{
        start,
        setStart,
        endGame,
        turn,
        restartGame,
        restart,
        setTurn,
        handelerChoices,
      }}
    >
      {children}
    </TicTacContext.Provider>
  );
};

export default TicTacContextComponent;
