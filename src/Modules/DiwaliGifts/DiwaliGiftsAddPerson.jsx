import React, { useState } from "react";

const DiwaliGiftsAddPerson = ({ names, setNames }) => {
  const [name, setName] = useState("");

  const addPerson = () => {
    let obj = {
      name: name,
      gifts: "No Gifts Assign",
    };
    setNames([...names, obj]);
    setName("");
  };

  return (
    <div className="my-5 p-2">
      <h2 className="my-2 font-bold text-xl">Add person here </h2>
      <input
        type="text"
        className="p-3 my-2 w-[500px] rounded-xl text-black"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        className="p-3 m-2 bg-yellow-400 font-semibold rounded-xl text-black w-[200px] h-auto"
        onClick={addPerson}
      >
        Add
      </button>
    </div>
  );
};

export default DiwaliGiftsAddPerson;
