import React from "react";
import { Link } from "react-router-dom";

const ProjectCart = ({ item }) => {
  return (
    <div className="relative  w-[300px] h-[550px] bg-yellow-200 rounded-xl bg-opacity-20">
      <div className="p-4">
        <h1 className="font-bold text-3xl py-4">{item.name}</h1>
        <p className="w-[90%]">{item.des}</p>

      </div>
      <Link to={`/${item.path}`}>
          <button className="absolute bottom-4 left-4 p-4 w-[90%] bg-yellow-400 text-black font-bold rounded-xl hover:bg-sky-500">
            Go to Project
          </button>
        </Link>
    </div>
  );
};

export default ProjectCart;
