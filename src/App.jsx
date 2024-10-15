import { BrowserRouter, Route, Routes } from "react-router-dom";
import PasswordGenrator from "./Modules/Password_Genrator/PasswordGenrator";
import Projects from "./Modules/Projects";
import ToDo from "./Modules/To-Do_List/ToDo";

function App() {
  return (
    <BrowserRouter className="relative">
   
      <Routes>
        <Route path="/" element={<Projects />}>
          <Route path="/password-genrator" element={<PasswordGenrator />} />
          <Route path="/todo-list" element={<ToDo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
