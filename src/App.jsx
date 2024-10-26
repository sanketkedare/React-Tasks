import { BrowserRouter, Route, Routes } from "react-router-dom";
import PasswordGenrator from "./Modules/Password_Genrator/PasswordGenrator.jsx";
import ToDo from "./Modules/To-Do_List/ToDo.jsx";
import Comment from "./Modules/Comment/Comment.jsx";
import Projects from "./Project/Projects.jsx";
import ShootingGuns from "./Modules/Shooting_Guns/ShootingGuns.jsx";
import TicTacToe from "./Modules/TicTacToe/TicTacToe.jsx";
import DiwaliGifts from "./Modules/DiwaliGifts/DiwaliGifts.jsx";

/**
 * App Component
 * 
 * This component sets up the routing for the application using React Router.
 * The main route ("/") renders the Projects component, which serves as a 
 * parent for all project-related routes. Each nested route corresponds 
 * to a specific project and is rendered within the Projects component.
 */
function App() {
  return (
    <BrowserRouter className="relative">
      <Routes>
        <Route path="/" element={<Projects />}>
          <Route path="password-generator" element={<PasswordGenrator />} />
          <Route path="todo-list" element={<ToDo />} />
          <Route path="comment-section" element={<Comment />} />
          <Route path="shooting-guns" element={<ShootingGuns />} />
          <Route path="diwali-gifts" element={<DiwaliGifts />} />
          <Route path="tic-tac-toe" element={<TicTacToe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
