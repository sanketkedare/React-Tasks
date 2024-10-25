import React, { useState } from "react";
import DiwaliGiftsTable from "./DiwaliGiftsTable";
import DiwaliGiftsButtons from "./DiwaliGiftsButtons";
import DiwaliGiftsAddPerson from "./DiwaliGiftsAddPerson";

const DiwaliGifts = () => {
  const [names, setNames] = useState([]);

  return (
    <div className="w-[80%] m-auto mt-10">
      <h1 className="text-3xl font-bold">Diwali Gifts</h1>

     <DiwaliGiftsAddPerson names={names} setNames={setNames} />

      <DiwaliGiftsTable names={names} setNames={setNames} />

      <DiwaliGiftsButtons names={names} setNames={setNames} />
    </div>
  );
};

export default DiwaliGifts;
