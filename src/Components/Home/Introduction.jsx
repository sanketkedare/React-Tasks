import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { introMotion } from "./utils";


// Introduction

const Introduction = () => {
  return (
    <motion.div className="h-screen flex items-center mx-10" {...introMotion}>
      <div className=" lg:w-[70%] w-full lg:mt-16 mt-14">
        <motion.p className="lg:text-[20px] italic text-yellow-500 my-10" >
          Hey, Confused Fresher !!
        </motion.p>
        <p className="text-[30px]  my-10">Learning Completed, But What next ?</p>
        <h1 className="lg:text-[90px] text-[40px] italic my-10">
          Here is an
          <span className="text-red-500 font-semibold not-italic"> One stop </span>
          solution for the Beginers !!
        </h1>
        <div className="flex lg:gap-10 gap-3  mt-10">
          <Link
            to="https://github.com/sanketkedare/React-Tasks"
            target="_blank"
            className="lg:text-sm  text-[12px] h-[50px] flex items-center justify-center shadow-inner border rounded-xl gap-3 p-3  bg-gray-900 hover:bg-gray-800   lg:w-[200px] w-[350px] font-bold"
          >
            <FaGithub />
            Github Code
          </Link>

          <Link
            to="https://www.linkedin.com/in/sanket-kedare-5820401bb/"
            target="_blank"
            className="lg:text-sm text-[12px] h-[50px] flex items-center justify-center shadow-inner border rounded-xl gap-3 p-3  bg-gray-900 hover:bg-gray-800  lg:w-[200px] w-[350px] font-bold "
          >
            <FaLinkedin className="text-sky-300 bg-black" />
            <span>Sanket Kedare</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Introduction;
