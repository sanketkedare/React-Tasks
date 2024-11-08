import { BrowserRouter, Route, Routes } from "react-router-dom";
import TicTackPage from "./Pages/TicTackPage.jsx";
import ToDoPage from "./Pages/ToDoPage.jsx";
import CommentSectionPage from "./Pages/CommentSectionPage.jsx";
import ShootingGunsPage from "./Pages/ShootingGunsPage.jsx";
import PasswordGeneratorPage from "./Pages/PasswordGeneratorPage.jsx";
import DiwaliGiftsPage from "./Pages/DiwaliGiftsPage.jsx";
import FetchPostsPage from "./Pages/FetchPostsPage.jsx";
import DiwaliLights from "./Components/Diwali_Lights/DiwaliLights.jsx";
import WelComePage from "./Pages/WelComePage.jsx";
import UserProfile from "./Components/User_Profile/UserProfile.jsx";

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
        <Route path="/" element={<WelComePage />}>
          <Route path="password-generator" element={<PasswordGeneratorPage />}/>
          <Route path="todo-list" element={<ToDoPage />} />
          <Route path="comment-section" element={<CommentSectionPage />} />
          <Route path="shooting-guns" element={<ShootingGunsPage />} />
          <Route path="diwali-gifts" element={<DiwaliGiftsPage />} />
          <Route path="tic-tac-toe" element={<TicTackPage />} />
          <Route path="fetch-posts" element={<FetchPostsPage />} />
          <Route path="diwali-lights" element={<DiwaliLights />} />
          <Route path="user-profile" element={<UserProfile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
