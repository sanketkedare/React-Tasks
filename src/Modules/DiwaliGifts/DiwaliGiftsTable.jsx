import React from "react";

const DiwaliGiftsTable = ({ names, setNames }) => {
  const removePerson = (name) => setNames(names.filter((i) => i.name !== name));

  return (
    <table className="my-5 border w-full ">
      <thead className="p-2 rounded-xl border bg-sky-200 text-black">
        <th className="p-2 text-start">Name</th>
        <th className="p-2 w-1/3">Gift</th>
        <th className="p-2">Remove</th>
      </thead>
      <tbody>
        {names &&
          names.map((person) => (
            <tr className="" key={person.name}>
              <td className="p-2">{person.name}</td>
              <td className="p-2 text-center">{person.gifts}</td>
              <td className="p-2 text-center">
                <button
                  className="hover:bg-red-600 hover:text-white p-2 m-auto bg-red-200 rounded-xl text-black font-blod w-[150px]"
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
