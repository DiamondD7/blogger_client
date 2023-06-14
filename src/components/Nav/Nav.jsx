import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navstyles.css";

const Nav = () => {
  const setLoggedOff = () => {
    localStorage.setItem("authorized", "false");
    localStorage.setItem("id", null);
    window.location.reload();
  };
  return (
    <div>
      <div className="nav-main__wrapper">
        <ul className="nav-ul__wrapper">
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "white" }}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "white" }}>
              Explore
            </Link>
          </li>
          <li>
            <button
              type="submit"
              className="nav-signout__btn"
              onClick={setLoggedOff}
            >
              Signout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
