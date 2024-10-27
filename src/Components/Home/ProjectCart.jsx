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

import React from "react";
import { Link } from "react-router-dom";

const ProjectCart = ({ item }) => {
  return (
    <div className="relative w-[300px] h-[550px] my-4 m-auto bg-yellow-200 rounded-xl bg-opacity-20 hover:bg-opacity-25">
      {/* Project Title and Description */}
      <div className="p-4">
        <h1 className="font-bold text-3xl py-4">{item.name}</h1>
        <p className="w-[90%]">{item.des}</p>
      </div>
      
      {/* Navigation Button */}
      <Link to={`/${item.path}`}>
        <button className="absolute bottom-4 left-4 p-4 w-[90%] bg-yellow-400  text-black font-bold rounded-xl hover:bg-sky-500">
          Go to Project
        </button>
      </Link>
    </div>
  );
};

export default ProjectCart;
