import React, { useContext } from "react";
import { TheamContext } from "./TheamContextComponent";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Theam = () => {
  const { theme, changeTheme } = useContext(TheamContext);

  return (
    <div
      style={{borderColor: theme.text}}
      className="absolute z-50 top-10 right-10 w-[50px] h-[50px] rounded-xl border p-2 flex justify-center items-center"
      onClick={changeTheme}
    >
      {theme.name === "Dark" ? <MdWbSunny className="text-3xl" /> : <FaMoon className="text-3xl"/>}
    </div>
  );
};

export default Theam;
