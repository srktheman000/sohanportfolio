import React, { useState } from "react";
import "./Header.css";
import Mobile from "./Mobile/Mobile";
import Web from "./Web/Web";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [Open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setOpen(!Open)}>
            <GiHamburgerMenu />
          </div>
          {Open && <Mobile Open={Open} setOpen={setOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
