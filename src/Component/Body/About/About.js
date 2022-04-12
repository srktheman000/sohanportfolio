import React from "react";
import Socialcontact from "../../Common/Socialcontact/Socialcontact";
import "./About.css";
import TypeWriterEffect from "react-typewriter-effect";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello, there 👋 i am <br />
          <span className="info-name">
            <TypeWriterEffect
              tDelay={2000}
              cursorColor="#3F3D56"
              multiText={["Sohan Kinage", "Web Developer"]}
              multiTextDelay={2000}
              multiTextLoop
              typeSpeed={90}
            />
          </span>
          I love experimenting with web
        </div>
        <div className="about-photo">
          <img
            src={require("../../../Assets/coding.png")}
            alt="sohanphoto"
            className="picture"
          />
        </div>
      </div>
      <div className="about-bottom">
        <Socialcontact />
      </div>
    </div>
  );
}

export default About;
