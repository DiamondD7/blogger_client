import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navstyles.css";

const Nav = () => {
  return (
    <div>
      <ul className="nav-ul__wrapper">
        <li>
          <Link style={{ textDecoration: "none" }}>Home</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }}>Profile</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }}>Find Friends</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
