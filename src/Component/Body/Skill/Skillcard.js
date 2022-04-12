import React from "react";
import "./Skillcard.css";

function Skillcard(prop) {
  console.log(prop.skill.name);
  return (
    <div className="skillcard">
      <div className="skill-icon">{prop.skill.icon}</div>
      <label htmlFor="skillname" className="skill-name">
        {prop.skill.name}
      </label>
    </div>
  );
}

export default Skillcard;
