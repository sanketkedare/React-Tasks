import React, { useState } from "react";
import useGenrateId from "./useGenrateId";

const MyForm = ({ setAllToDos }) => {
  const [toDo, setToDo] = useState("");

  const createToDo = () => {
    const obj = {
      id: useGenrateId(),
      createdAt: new Date().toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }), // Format: DD-MM-YY HH-MM
      name: toDo,
      progress: "UPCOMING", // Default progress
    };

    setAllToDos((prev) => [...prev, obj]);
    setToDo(""); // Clear input after creating a to-do
  };

  const resetTodo = () => setToDo("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full border p-5 lg:mt-5 mt-10 rounded-xl"
    >
      <input
        onChange={(e) => setToDo(e.target.value)}
        value={toDo}
        type="text"
        className="w-full px-5 p-2 text-black font-semibold h-[50px] rounded-xl"
        placeholder="Create Your Task!"
      />
      <div className="flex justify-between gap-2">
        <button
          disabled={!toDo}
          type="submit"
          className="p-2 mt-2 w-1/2 bg-yellow-400 rounded-xl text-black font-bold hover:bg-sky-500"
          onClick={createToDo}
        >
          Create To-Do
        </button>
        <button
          disabled={!toDo}
          type="reset"
          className="p-2 mt-2 w-1/2 bg-red-600 rounded-xl text-white hover:text-black font-bold hover:bg-sky-500"
          onClick={resetTodo}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default MyForm;
