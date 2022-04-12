import React from "react";
import "./Socialcontact.css";
import { SocialData } from "../../Data/Social";

function Socialcontact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} alt="social-icon" className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Socialcontact;
