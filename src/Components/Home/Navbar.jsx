import React from "react";
import { motion } from "framer-motion";
import { headerMotion, iconMotion } from "./utils";

//  Navbar

const Navbar = () => {
  return (
    <>
      {/* Header Section */}
      <motion.div
        className="flex z-30 gap-4 justify-center items-center w-screen fixed top-0 bg-[#010113] lg:h-[100px] h-[70px] lg:rounded-b-xl rounded-b-full"
        {...headerMotion}
      >
        <img src="/react.svg" alt="React Logo" />
        <h1 className="lg:text-4xl text-xl font-bold">React Tasks</h1>
        <img src="/vite.svg" alt="Vite Logo" />
      </motion.div>

      {/* Rotating Icon */}
      <motion.div className="lg:opacity-60 z-10  opacity-10 absolute lg:w-[250px] m-auto  w-full lg:h-[60vh] lg:top-24 top-40 lg:right-28 shadow-sm rounded-full flex justify-center items-center">
        <motion.img
          id="react-icon"
          src="/react.svg"
          className="lg:h-full h-[60vw]"
          {...iconMotion}
        />
      </motion.div>
    </>
  );
};

export default Navbar;
