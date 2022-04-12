import React from "react";
import About from "./About/About";
import Skill from "./Skill/Skill";
import Project from "./Project/Project";
import Work from "./Work/Work";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
function Body() {
  return (
    <div className="body">
      <section id="About">
        <About />
      </section>
      <section id="Project">
        <Project />
      </section>
      <section id="Skill">
        <Skill />
      </section>
      <section id="Work">
        <Work />
      </section>
      <section id="Blog">
        <Blog />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
