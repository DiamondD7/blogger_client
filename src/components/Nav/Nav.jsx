import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navstyles.css";

const Nav = () => {
  return (
    <div>
      <div className="nav-main__wrapper">
        <ul className="nav-ul__wrapper">
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              Profile
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }}>Explore</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
