// DiwaliGiftsTable.js
import React from "react";

/**
 * DiwaliGiftsTable component
 * 
 * This component displays a table of persons and their assigned gifts. 
 * It provides functionality to remove a person from the list.
 */
const DiwaliGiftsTable = ({ names, setNames }) => {
  const removePerson = (name) => setNames(names.filter((i) => i.name !== name));

  return (
    <table className="my-5 border w-full">
      <thead className="p-2 rounded-xl border bg-sky-200 text-black">
        <tr>
          <th className="p-2 text-start w-1/3">Name</th>
          <th className="p-2 w-1/3">Gift</th>
          <th className="p-2">Remove</th>
        </tr>
      </thead>
      <tbody>
        {names &&
          names.map((person) => (
            <tr key={person.name}>
              <td className="p-2">{person.name}</td>
              <td className="p-2 text-center">{person.gifts}</td>
              <td className="p-2 text-center">
                <button
                  className="hover:bg-red-600 hover:text-white p-2 m-auto bg-red-200 rounded-xl text-black font-bold lg:w-[150px]"
                  onClick={() => removePerson(person.name)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DiwaliGiftsTable;
