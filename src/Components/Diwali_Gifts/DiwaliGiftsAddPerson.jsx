// DiwaliGiftsAddPerson.js
import React, { useState } from "react";

/**
 * DiwaliGiftsAddPerson component
 * 
 * This component allows the user to add a person's name to the list 
 * for receiving Diwali gifts. It maintains the local state of the input field 
 * and handles the addition of new persons to the main list.
 */
const DiwaliGiftsAddPerson = ({ names, setNames }) => {
  const [name, setName] = useState("");

  const addPerson = () => {
    // Create a new person object with a default gift status
    const obj = {
      name: name,
      gifts: "No Gifts Assigned",
    };
    setNames([...names, obj]);
    setName(""); // Clear input field
  };

  return (
    <div className="my-5 p-2">
      <h2 className="my-2 font-bold lg:text-xl">Add person here</h2>
      <input
        type="text"
        className="p-3 my-2 lg:w-[500px] w-full rounded-xl text-black"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        className="lg:p-3 p-2 lg:m-2 bg-yellow-400 font-semibold rounded-xl text-black lg:w-[200px] w-full h-auto"
        onClick={addPerson}
      >
        Add
      </button>
    </div>
  );
};

export default DiwaliGiftsAddPerson;
