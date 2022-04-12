import "./App.css";
import Home from "./Component/Home/Home";
import { Routes, Route } from "react-router-dom";
import Project from "./Component/Body/Project/Project";
import Contact from "./Component/Body/Contact/Contact";
import Skill from "./Component/Body/Skill/Skill";
import Work from "./Component/Body/Work/Work";
import Blog from "./Component/Body/Blog/Blog";
function App() {
  return (
    <>
      {/* <Routes>
        <Route exact path="/Project" element={<Project />} />
        <Route exact path="/Skill" element={<Skill />} />
        <Route exact path="/Work" element={<Work />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes> */}
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
