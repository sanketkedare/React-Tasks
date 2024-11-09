import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const ProjectPage = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div className="w-screen h-screen overflow-y-auto">
      <div className="lg:mx-10 mx-4">
        {/* Home Button with Motion Effects */}
        <Link to="/">
          <motion.div
            className={`fixed flex items-center justify-center gap-2 text-xl font-bold lg:top-10 top-6 lg:left-10 left-6 p-2 h-[60px] bg-yellow-400 hover:bg-sky-500 rounded-xl text-black`}
            onMouseEnter={() => setShow(true)}
         
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <BiHome className="lg:text-[40px] text-[30px] text-black" />
            
            {/* Animated "Go Home" text */}
            <AnimatePresence>
              {show && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Go Home
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectPage;
