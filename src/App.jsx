import { BrowserRouter, Route, Routes } from "react-router-dom";
import PasswordGenrator from "./Modules/Password_Genrator/PasswordGenrator";
import ToDo from "./Modules/To-Do_List/ToDo";
import Comment from "./Modules/Comment/comment";
import Projects from "./Modules/Project/Projects";
import ShootingGuns from "./Modules/Shooting_Guns/ShootingGuns";
import DiwaliGifts from "./Modules/DiWaliGifts/DiwaliGifts";

function App() {
  return (
    <BrowserRouter className="relative">
   
      <Routes>
        <Route path="/" element={<Projects />}>
          <Route path="/password-generator" element={<PasswordGenrator />} />
          <Route path="/todo-list" element={<ToDo />} />
          <Route path='/comment-section' element={<Comment/>}/>
          <Route path="/shooting-guns" element={<ShootingGuns/>}/>
          <Route path="/diwali-gifts" element={<DiwaliGifts/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
