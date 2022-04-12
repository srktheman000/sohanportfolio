import React from "react";
import "./Project.css";
import { Projectdata } from "../../Data/Projectdata";
import ProjectCard from "./ProjectCard";
import Separator from "../../Common/Separator/Separator";
function Project() {
  const data = Projectdata;
  return (
    <div className="projects" id="Project">
      <Separator />
      <label className="section-title">
        <span className="projecthead">Projects</span>
      </label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Project;
