import React, { useContext } from "react";
import { motion } from "framer-motion";
import { headerMotion, iconMotion } from "./utils";
import { TheamContext } from "../../Utils/TheamContextComponent";

//  Navbar

const Navbar = () => 
{
  const { theme } = useContext(TheamContext);

  return (
    <>
      {/* Header Section */}
      <motion.div
      style={{background: theme.background , color: theme.text, borderColor:theme.text}}
        className=" lg:border-none border-b flex z-30 gap-4 justify-center items-center w-screen sticky top-0 lg:h-[70px] h-[70px]  rounded-b-3xl"
        {...headerMotion}
      >
        <img src="/react.svg" alt="React Logo" />
        <h1 className="lg:text-2xl text-xl font-bold">React Tasks</h1>
        <img src="/vite.svg" alt="Vite Logo" />
      </motion.div>

      {/* Rotating Icon */}
      <motion.div className="lg:opacity-60 z-10  opacity-15 absolute lg:w-[250px] m-auto  w-full lg:h-[60vh] lg:top-24 top-40 lg:right-28 shadow-sm rounded-full flex justify-center items-center">
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
