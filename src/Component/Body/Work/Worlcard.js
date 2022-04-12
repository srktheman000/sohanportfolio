import React from "react";
import "./Workcard.css";
function Worlcard(prop) {
  console.log(prop.item);
  return (
    <div className="work-card">
      <div className="companylog">
        <img src={prop.item.companyLogo} className="work-logo" alt="workimg" />
      </div>
      <div className="workdata">
        <div className="work-info">
          <label htmlFor="name" className="company-name">
            {prop.item.company}
          </label>
        </div>

        <div className="work-dates">
          (<label htmlFor="datejoiin">{prop.item.Datejoining}</label>-
          <label>{prop.item.Dateend}</label>)
        </div>

        <div className="work-desc">
          <p>{prop.item.Work}</p>
        </div>
      </div>
    </div>
  );
}

export default Worlcard;
