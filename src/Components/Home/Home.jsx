/**
 * Home Component:
 *
 * Purpose:
 * - Main component for displaying the Home page.
 * - Conditionally renders either the project list with introduction or individual project details based on the current route.
 *
 * Key Sections:
 * - Header: Animated header with React and Vite logos and project title.
 * - Rotating Icon: Adds a rotating React icon for a dynamic visual element.
 * - Introduction: Renders an introduction section with project context.
 * - Task Intro Text: Displays an introductory message about the tasks available for practice.
 * - Project List: Displays the list of projects in a grid layout with staggered animations.
 *
 * Navigation:
 * - Home Button: Appears on non-home routes, allowing users to navigate back to the home page.
 * - Outlet: Used to render nested routes for individual project details.
 *
 * Dependencies:
 * - React Router for navigation (Link, Outlet, useLocation).
 * - Framer Motion for animations.
 * - ProjectList (imported JSON) provides data for rendering projects.
 * - ProjectCart component displays each project.
 */

import React from "react";
import { useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";

const Home = () => {
  const { pathname } = useLocation();

  return (
    <div className="relative">
      {/* Renders Project List Page or Detailed Project View based on pathname */}
      {pathname === "/" ? <HomePage /> : <ProjectPage />}
    </div>
  );
};

export default Home;
