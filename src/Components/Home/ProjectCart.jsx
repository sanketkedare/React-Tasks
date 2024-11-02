/**
 * ProjectCart Component:
 * 
 * Purpose:
 * - Renders a card for each project item with a title, description, and navigation button.
 * 
 * Key Features:
 * - Project Title and Description: Displays the project’s name and description dynamically based on the passed `item` prop.
 * - Navigation: Includes a button linking to the individual project page, derived from `item.path`.
 * 
 * Dependencies:
 * - React Router’s Link component for navigation.
 * 
 * Styling:
 * - Basic layout with background color, rounded corners, and button hover effects.
 */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TheamContext } from "../../Utils/TheamContextComponent";

const ProjectCart = ({ item }) => 
{
  const {theme} = useContext(TheamContext);

  return (
    <div  style={{ borderColor:theme.text}}
       className="relative lg:w-[300px] lg:h-[550px] h-[55vh] my-4 m-auto bg-yellow-200 rounded-xl bg-opacity-20 hover:bg-opacity-25 border">
      {/* Project Title and Description */}
      <div className="p-4">
        <h1 className="font-bold lg:text-[27px] text-[13px] border-b lg:py-4 py-2 ">{item.name}</h1>
        <p className=" mt-5 lg:text-lg text-[12px]">{item.des}</p>
      </div>
      
      {/* Navigation Button */}
      <Link to={`/${item.path}`}>
        <button className="absolute lg:text-xl text-[12px] bottom-4 lg:left-4 left-2 lg:p-4 p-2 w-[90%] bg-yellow-400  text-black font-bold rounded-xl hover:bg-sky-500">
          Go to Project
        </button>
      </Link>
    </div>
  );
};

export default ProjectCart;
