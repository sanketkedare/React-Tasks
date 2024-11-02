import React, { useContext } from "react";
import { TheamContext } from "../../Utils/TheamContextComponent";

const Footer = () => {
  const { theme } = useContext(TheamContext);
  return (
    <div
      style={{ backgroundColor: theme.background, color: theme.text }}
      className="absolute w-screen h-[30vh] flex justify-center items-center bg-opacity-70"
    >
      <div>
        <h1>Copyright@2024 Sanket Kedare</h1>
      </div>
    </div>
  );
};

export default Footer;
