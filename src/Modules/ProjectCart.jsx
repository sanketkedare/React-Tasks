import React from "react";
import { Link } from "react-router-dom";

const ProjectCart = ({ item }) => {
  return (
    <div className="flex justify-start items-center">
      <div className=" mt-10 rounded-r-full w-[60%] h-[300px] bg-yellow-200 bg-opacity-20 p-5">
        <h1 className="font-bold text-3xl py-4">{item.name}</h1>
        <p className="w-[90%]">{item.des}</p>
        <Link to={`/${item.path}`}>
          <button className="mt-4 p-4 w-[200px] bg-yellow-400 text-black font-bold rounded-xl hover:bg-sky-500">
            Go to Project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCart;
