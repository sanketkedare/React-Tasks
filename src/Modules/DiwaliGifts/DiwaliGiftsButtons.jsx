// DiwaliGiftsButtons.js
import React, { useState, useEffect } from "react";
import { useAssignGift } from "./myHooks";

/**
 * DiwaliGiftsButtons component
 * 
 * This component contains buttons to assign gifts, shuffle gifts, 
 * and reset the gift assignments. It manages the state to track 
 * whether gifts have been assigned or not.
 */
const DiwaliGiftsButtons = ({ names, setNames }) => {
  const [assigned, setAssigned] = useState(false);

  const assignGifts = () => {
    const checkGift = (i) => {
      if (i.gifts === "No Gifts Assigned") {
        return {
          ...i,
          gifts: useAssignGift(),
        };
      }
      return i;
    };

    if (assigned) {
      alert("You have already assigned Gifts");
    } else {
      setAssigned(true);
      setNames(names.map((i) => checkGift(i)));
    }
  };

  const resetGifts = () => {
    setNames(
      names.map((i) => ({
        ...i,
        gifts: "No Gifts Assigned",
      }))
    );
    setAssigned(false);
  };

  const shuffleGifts = () => {
    if (!assigned) {
      alert("Please Assign Gifts first");
      return;
    }
    setNames(
      names.map((i) => ({
        ...i,
        gifts: useAssignGift(),
      }))
    );
    setAssigned(true);
  };

  useEffect(() => {
    setAssigned(false); // Reset assigned state when names change
  }, [names.length]);

  return (
    <div className="my-2 p-2 flex justify-evenly">
      <button
        className="p-2 m-2 w-[300px] bg-sky-500 hover:bg-yellow-500 text-black font-bold rounded-xl"
        onClick={assignGifts}
      >
        Assign Gifts
      </button>
      <button
        className="p-2 m-2 w-[300px] bg-red-400 hover:bg-red-800 hover:text-white text-black font-bold rounded-xl"
        onClick={shuffleGifts}
      >
        Shuffle Gifts
      </button>
      <button
        className="p-2 m-2 w-[300px] bg-gray-400 hover:bg-white text-black font-bold rounded-xl"
        onClick={resetGifts}
      >
        Reset
      </button>
    </div>
  );
};

export default DiwaliGiftsButtons;
