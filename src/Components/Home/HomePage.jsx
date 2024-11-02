import React from "react";
import Introduction from "./Introduction";
import TaskIntroText from "./TaskIntroText";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProjectSection from "./ProjectSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <TaskIntroText />
      <ProjectSection />
      <Footer />
    </>
  );
};

export default HomePage;
