import React from "react";
import ProjectList from "./Projects.json";
import ProjectCart from "./ProjectCart";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { motion } from "framer-motion";

const Projects = () => {
  const { pathname } = useLocation();

  return (
    <div className="mx-10 mt-10 relative">
      {pathname === "/" ? (
        <>
          <motion.div className="flex gap-2 justify-center items-center"
           initial={{opacity:1, x:-200}}
           animate={{opacity:1, x:0}}
           transition={{
            duration:1,
            delay:0.0
           }}
          >
            <img src="/react.svg" /> +
            <img src="/vite.svg" />
            <h1 className="text-4xl font-bold">Simple React Projects</h1>
          </motion.div>
          <div className="p-4">
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

          <motion.div
            className="fixed w-[30%] h-[60vh] top-24 right-16 shadow-sm rounded-full flex justify-center items-center"
            animate={{ rotate: -360}}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img id="react-icon" src="/react.svg" className="h-full" />
          </motion.div>
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
