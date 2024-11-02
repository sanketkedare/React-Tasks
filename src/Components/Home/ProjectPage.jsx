import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BiHome } from "react-icons/bi";

const ProjectPage = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto">
      <div lg:mx-10 mx-4>
        {/* Home Button and Outlet for Nested Routes */}
        <Link to="/">
          <BiHome className="fixed top-10 left-10 text-[50px] p-2 bg-yellow-400 hover:bg-sky-500 rounded-xl text-black" />
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectPage;
