import React from "react";
import ProjectList from "./Projects.json";
import ProjectCart from "./ProjectCart";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { motion } from "framer-motion";
import Introduction from "./Introduction";

const Projects = () => {
  const { pathname } = useLocation();
  //
  return (
    <div className="mx-10  relative">
      {pathname === "/" ? (
        <>
          <motion.div
            className="flex z-10 gap-2 justify-center items-center sticky top-0 bg-[#010113]  w-full h-[100px] "
            initial={{ opacity: 1, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.0,
            }}
          >
            <img src="/react.svg" /> +
            <img src="/vite.svg" />
            <h1 className="text-4xl font-bold">Simple React Projects</h1>
          </motion.div>
          <motion.div className="absolute p-2 w-[250px] h-[60vh] top-24 right-28 shadow-sm rounded-full flex justify-center items-center">
            <motion.img
              id="react-icon"
              src="/react.svg"
              className="h-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          <Introduction />
          <div className="text-[30px]  m-auto h-screen flex items-center justify-center text-center rounded-b-full bg-gray-600 bg-opacity-5">
            <p className="w-full">
            " We have Collection of a tasks which asked during coding round.
            <br/>
            Explore This and practice to consolidate your experties in coding in
            react. 
            <br/>
            Also you have a chance to colabrate with us and join our
            team. "
            <br/></p>
          </div>

          <h2 className="text-3xl text-center my-10 font-bold border-t-2 pt-10 ">Tasks </h2>
          <div className="p-4 grid grid-cols-4">
            {ProjectList.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.5, // Stagger the animation for each item
                }}
              >
                <ProjectCart item={item} />
              </motion.div>
            ))}
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
