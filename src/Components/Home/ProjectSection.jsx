import React from "react";
import ProjectList from "./Projects.json";
import ProjectCart from "./ProjectCart";
import { motion } from "framer-motion";


const ProjectSection = () => {
  return (
    <>
      {/* Project List Section */}
      <h2 className="lg:text-3xl text-xl text-center py-10 font-bold border-t-2 pt-10 hover:text-yellow-400 ">
        Tasks
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
    </>
  );
};

export default ProjectSection;
