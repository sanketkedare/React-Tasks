import React, { useState } from "react";
import People from "./People.json";
import Artical from "./Artical";

const Comment = () => {
  const [currentPerson, setCurrentPerson] = useState(People[Math.floor(Math.random() * 10)]);

  return (
    <div className="w-[80%] mt-5 m-auto">
      <h1 className="text-3xl font-semibold">Comments Saction</h1>
      <hr className="mt-4" />
      <div className="mt-5  w-full h-[80vh] flex ">
        <Artical currentPerson={currentPerson} />
        <div className="p-5 w-1/4 border rounded-xl flex gap-1 flex-wrap justify-evenly overflow-auto">
          {/* List of the people */}
          <h3 className="w-full text-xl text-center h-10">Select user here</h3>
          {People.map((person) => (
            <div
              className={`cursor-pointer hover:bg-white hover:text-black w-[100px] border m-1 rounded-xl flex items-center justify-center ${
                currentPerson.id === person.id && "bg-yellow-500 text-black"
              }`}
              key={person.id}
              onClick={() => setCurrentPerson(person)}
            >
              <div>
                <p className="text-center font-semibold">
                  {person.name.split(" ")[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
