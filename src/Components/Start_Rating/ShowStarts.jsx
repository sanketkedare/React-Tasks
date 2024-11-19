import React from "react";
import { IoIosStar } from "react-icons/io";

const ShowStars = ({ rate, setRate }) => {
  const totalStars = 5;

  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: totalStars }, (_, index) => (
        <IoIosStar
          key={index}
          className="text-[50px] cursor-pointer"
          style={{ color: rate > index ? "#ffff00" : "#cccccc" }}
          onClick={() => setRate(index + 1)}
        />
      ))}
    </div>
  );
};

export default ShowStars;
