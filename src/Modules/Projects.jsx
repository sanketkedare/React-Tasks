import React from "react";
import ProjectList from "./Pojects.json";
import ProjectCart from "./ProjectCart";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiHome } from "react-icons/bi";

const Projects = () => {
  const { pathname } = useLocation();

  return (
    <div className="mx-10 mt-10 relative">
      {pathname === "/" ? (
        <>
          <h1 className="text-4xl font-bold ">Simple React Projects</h1>
          <div className="p-4">
            {ProjectList.map((item) => (
              <ProjectCart key={item.path} item={item} />
            ))}
          </div>

          <div className="absolute w-[30%] h-[60vh]  top-16 right-16 shadow-sm rounded-full flex justify-center items-center">
            <img id="react-icon" src="/react.svg" className="h-full" />
          </div>
        </>
      ) : (
        <>
          <Link to={"/"}>
            <BiHome className="fixed top-10 left-10 text-[50px] p-2 bg-yellow-400 hover:bg-sky-500 rounded-xl text-black " />
          </Link>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Projects;
