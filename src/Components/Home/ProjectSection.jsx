import React, { useContext } from "react";
import ProjectList from "../../Utils/Projects.json";
import ProjectCart from "./ProjectCart";
import { motion } from "framer-motion";
import { BiSolidCollection } from "react-icons/bi";
import { TheamContext } from "../../Utils/TheamContextComponent";

const ProjectSection = () => 
{
  const {theme} = useContext(TheamContext)
  console.log(theme)

  return (
    <div className="relative border-b-2 rounded-b-xl" style={{background: theme.background, borderColor:theme.text}}>
      {/* Project List Section */}
      <h2 style={{background: theme.background, borderColor:theme.text}}
          className={`sticky lg:text-3xl top-0 text-xl flex justify-center items-center gap-4 text-center py-6 
          font-bold border-t-2  rounded-t-xl  hover:text-yellow-400 z-30 lg:rounded-b-3xl rounded-b-full`}>
        <BiSolidCollection />
        Task Collection
      </h2>
      <div className="p-4 grid lg:grid-cols-4 grid-cols-2 gap-2">
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
    </div>
  );
};

export default ProjectSection;
