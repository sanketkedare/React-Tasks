import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BiHome } from "react-icons/bi";

const ProjectPage = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto">
      <div lg:mx-10 mx-4>
        {/* Home Button and Outlet for Nested Routes */}
        <Link to="/">
          <BiHome className="fixed lg:top-10 top-6 lg:left-10 left-6 lg:text-[50px] text-[30px] lg:p-2 p-1 bg-yellow-400 hover:bg-sky-500 rounded-xl text-black" />
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectPage;
