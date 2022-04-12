import React from "react";
import "./ProjectCard.css";
import { BsGlobe } from "react-icons/bs";

function ProjectCard({ project }) {
  return (
    <div className="projectcard">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-link">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <BsGlobe className="link-button-name" /> demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i className="devicon-github-original colored"></i>
                Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tag.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <div className="projectimg project-photo">
        <img
          src={project.image}
          width="50"
          // height="0"
          alt="projectimg"
          className="project-photo"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
