import React,{useState, useEffect} from "react";
import { useAssignGift } from "./myHooks";

const DiwaliGiftsButtons = ({ names, setNames }) => {
  const [assigned, setAssigned] = useState(false);

  const assignGifts = () => {
    const checkGift = (i) => {
      if (i.gifts === "No Gifts Assign") {
        return {
          ...i,
          gifts: useAssignGift(),
        };
      } else {
        return i;
      }
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
        gifts: "No Gifts Assign",
      }))
    );
    setAssigned(false);
  };

  const suffleGifts = () => {
    setNames(
      names.map((i) => ({
        ...i,
        gifts: useAssignGift(),
      }))
    );
    setAssigned(true)
  };

  useEffect(() => {
    setAssigned(false);
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
        onClick={suffleGifts}
      >
        Suffle Gifts
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
