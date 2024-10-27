/**
 * Home Component:
 * 
 * Purpose:
 * - Main component for displaying the Home page.
 * - Conditionally renders either the project list with introduction or individual project details based on the current route.
 * 
 * Key Sections:
 * - Header: Animated header with React and Vite logos and project title.
 * - Rotating Icon: Adds a rotating React icon for a dynamic visual element.
 * - Introduction: Renders an introduction section with project context.
 * - Task Intro Text: Displays an introductory message about the tasks available for practice.
 * - Project List: Displays the list of projects in a grid layout with staggered animations.
 * 
 * Navigation:
 * - Home Button: Appears on non-home routes, allowing users to navigate back to the home page.
 * - Outlet: Used to render nested routes for individual project details.
 * 
 * Dependencies:
 * - React Router for navigation (Link, Outlet, useLocation).
 * - Framer Motion for animations.
 * - ProjectList (imported JSON) provides data for rendering projects.
 * - ProjectCart component displays each project.
 */

import React from "react";
import ProjectList from "./Projects.json";
import ProjectCart from "./ProjectCart";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { motion } from "framer-motion";
import Introduction from "./Introduction";
import { headerMotion, iconMotion } from "./utils";
import TaskIntroText from "./TaskIntroText";

const Home = () => {
  const { pathname } = useLocation();

  return (
    <div className="lg:mx-10 mx-5 relative">
      {/* Renders Project List Page or Detailed Project View based on pathname */}
      {pathname === "/" ? (
        <>
          {/* Header Section */}
          <motion.div
            className="flex z-10 gap-2 justify-center items-center sticky top-0 bg-[#010113] w-full h-[100px]"
            {...headerMotion}
          >
            <img src="/react.svg" alt="React Logo" />
            <img src="/vite.svg" alt="Vite Logo" />
            <h1 className="lg:text-4xl text-xl font-bold">React Tasks</h1>
          </motion.div>

          {/* Rotating Icon */}
          <motion.div className="absolute p-2 lg:w-[250px] lg:h-[60vh] h-[10vh] lg:top-24 lg:right-28 right-5 shadow-sm rounded-full flex justify-center items-center">
            <motion.img
              id="react-icon"
              src="/react.svg"
              className="h-full"
              {...iconMotion}
            />
          </motion.div>

          <Introduction />
          <TaskIntroText />

          {/* Project List Section */}
          <h2 className="text-3xl text-center my-10 font-bold border-t-2 pt-10">Tasks</h2>
          <div className="p-4 grid lg:grid-cols-4">
            {ProjectList.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.5 }}
              >
                <ProjectCart item={item} />
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Home Button and Outlet for Nested Routes */}
          <Link to="/">
            <BiHome className="fixed top-10 left-10 text-[50px] p-2 bg-yellow-400 hover:bg-sky-500 rounded-xl text-black" />
          </Link>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Home;
