import React from "react";
import "./Mobile.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";
import { BsCardText } from "react-icons/bs";
import { Link } from "react-scroll";

function Mobile(props) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => props.setOpen(!props.Open)}>
        <AiOutlineCloseCircle />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <Link to="Project" smooth={true} duration={500}>
            <FaLaptopCode className="option-icon" />
            Project
          </Link>
        </div>
        <div className="mobile-option">
          <Link to="Skill" smooth={true} duration={500}>
            <RiStackLine className="option-icon" />
            Skill
          </Link>
        </div>
        <div className="mobile-option">
          <Link to="Contact" smooth={true} duration={500}>
            <MdWorkOutline className="option-icon" />
            Work
          </Link>
        </div>
        <div className="mobile-option">
          <Link to="Contact" smooth={true} duration={500}>
            <BsCardText className="option-icon" />
            Blog
          </Link>
        </div>
        <div className="mobile-option">
          <Link to="Contact" smooth={true} duration={500}>
            <MdOutlinePermContactCalendar className="option-icon" />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
