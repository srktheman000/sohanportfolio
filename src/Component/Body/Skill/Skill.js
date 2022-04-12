import React from "react";
import Separator from "../../Common/Separator/Separator";
import "./Skill.css";
import { skilldata } from "../../Data/Skilldata";
import Skillcard from "./Skillcard";

function Skill() {
  const data = skilldata;
  return (
    <div className="skills" id="Skill">
      <Separator />
      <label htmlFor="skill" className="section-title">
        <span className="projecthead">Skills</span>
      </label>
      <div className="skills-contaner">
        {data.map((item) => {
          return (
            <div className="skill-section">
              <label className="skill-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <Skillcard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
