import React, { useState } from "react";
import People from "./People.json"; // Import the list of users
import Artical from "./Artical"; // Import the Artical component

/**
 * Comment Component
 * This component displays a list of users and allows the selection of a user
 * to view their comments on a given article. It updates the article content
 * based on the selected user.
 */
const Comment = () => {
  // State to hold the currently selected user
  const [currentPerson, setCurrentPerson] = useState(
    People[Math.floor(Math.random() * People.length)] // Randomly select a user initially
  );

  return (
    <div className="lg:w-[80%] lg:mt-5 mt-14 m-auto">
      <h1 className="lg:text-3xl text-xl font-semibold text-center">Comments Section</h1>
      <hr className="mt-4" />
      <div className="mt-5 w-full h-[80vh] flex">
        {/* Render the article for the currently selected user */}
        <Artical currentPerson={currentPerson} />
        
        <div className="p-5 w-1/4 border rounded-xl flex gap-1 flex-wrap justify-evenly overflow-auto">
          <h3 className="w-full lg:text-xl text-center lg:h-10">Users</h3>
          
          {/* Map through the list of users to create user selection buttons */}
          {People.map((person) => (
            <div
              className={`cursor-pointer hover:bg-white hover:text-black lg:w-[100px] border m-1 rounded-xl flex items-center justify-center ${
                currentPerson.id === person.id ? "bg-yellow-500 text-black" : ""
              }`}
              key={person.id} // Unique key for each user
              onClick={() => setCurrentPerson(person)} // Update selected user on click
              aria-label={`Select ${person.name}`} // Accessibility label
            >
              <p className="text-center font-semibold lg:w-[100px] w-[80px]">
                {person.name.split(" ")[0]} {/* Display the first name */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
