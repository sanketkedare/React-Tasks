import React from "react";
import Home from "../Components/Home/Home";
import TheamContextComponent from "../Utils/TheamContextComponent";


const WelComePage = () => {
  return (
    <TheamContextComponent>
      <Home />
    </TheamContextComponent>
  );
};

export default WelComePage;
