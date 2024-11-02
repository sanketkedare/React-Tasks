import React, { useContext } from "react";
import Introduction from "./Introduction";
import TaskIntroText from "./TaskIntroText";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProjectSection from "./ProjectSection";
import Theam from "../../Utils/Theam";
import { TheamContext } from "../../Utils/TheamContextComponent";


const HomePage = () => {
  const { theme } = useContext(TheamContext);

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <div className="relative">
        <Navbar />
        <Theam/>
        <Introduction />
        <TaskIntroText />
      </div>

      <ProjectSection />
      <Footer />
    </div>
  );
};

export default HomePage;
