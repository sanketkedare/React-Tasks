import React, { useContext } from "react";
import { TheamContext } from "../../Utils/TheamContextComponent";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "./Introduction";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme } = useContext(TheamContext);

  return (
    <footer
      style={{ backgroundColor: theme.background, color: theme.text }}
      className="w-full h-[30vh] flex flex-col justify-center items-center bg-opacity-90 "
    >
      <h1 className="text-md font-semibold tracking-wider text-gray-500">
        Copyright © 2024 Sanket Kedare
      </h1>
      <p className="text-sm mt-2 opacity-75 text-gray-500">
        All rights reserved.
      </p>
      <div className="flex gap-3 my-2">
          <Link
            to={GITHUB_URL}
            target="_blank"
            className="lg:text-sm  text-[12px] h-[50px] flex items-center justify-center shadow-inner rounded-full gap-3 p-3   hover:bg-gray-800 font-bold text-white"
          >
            <FaGithub />
          </Link>

          <Link
            to={LINKEDIN_URL}
            target="_blank"
            className="shadow-sm lg:text-sm text-[12px] h-[50px] flex items-center justify-center rounded-full gap-3 p-3  hover:bg-gray-800 font-bold text-white"
          >
            <FaLinkedin className="text-sky-300 bg-black" />
          </Link>
        </div>

    </footer>
  );
};

export default Footer;
