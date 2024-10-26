// DiwaliGifts.js
import React, { useState } from "react";
import DiwaliGiftsTable from "./DiwaliGiftsTable";
import DiwaliGiftsButtons from "./DiwaliGiftsButtons";
import DiwaliGiftsAddPerson from "./DiwaliGiftsAddPerson";

/**
 * DiwaliGifts component
 * 
 * This component serves as the main container for managing Diwali gifts. 
 * It includes functionalities to add persons, assign gifts, shuffle gifts, 
 * and reset the gift assignments. 
 * The state is maintained for a list of names and their corresponding gift statuses.
 */
const DiwaliGifts = () => {
  const [names, setNames] = useState([]);

  return (
    <div className="lg:w-[80%] m-auto mt-10">
      <h1 className="lg:text-3xl text-xl text-center font-bold">Diwali Gifts</h1>

      {/* Component to add a new person */}
      <DiwaliGiftsAddPerson names={names} setNames={setNames} />

      {/* Table displaying added persons and their gifts */}
      <DiwaliGiftsTable names={names} setNames={setNames} />

      {/* Buttons for assigning, shuffling, and resetting gifts */}
      <DiwaliGiftsButtons names={names} setNames={setNames} />
    </div>
  );
};

export default DiwaliGifts;
