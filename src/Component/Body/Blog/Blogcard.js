import React from "react";
import "./Blogcard.css";

function Blogcard(props) {
  return (
    <div className="blogcard">
      <h3>{props.blog.title}</h3>
      <div className="blogbody">{props.blog.description}</div>
      <div className="blogfooter">
        <a href={props.blog.link}>
          <button className="bloglinkbutton">View more</button>
        </a>
      </div>
    </div>
  );
}

export default Blogcard;
