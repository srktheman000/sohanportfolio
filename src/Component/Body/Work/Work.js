import React from "react";
import Separator from "../../Common/Separator/Separator";
import "./Work.css";
import { Workdata } from "../../Data/Workdata";
import Worlcard from "./Worlcard";
function Work() {
  const data = Workdata;
  return (
    <div className="Work" id="Work">
      <Separator />
      <label htmlFor="work" className="work">
        <span className="projecthead">Work</span>
      </label>
      <div className="worklist">
        {data.map((item) => {
          return <Worlcard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
