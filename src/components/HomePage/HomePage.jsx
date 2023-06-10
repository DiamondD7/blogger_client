import React from "react";
import Nav from "../Nav/Nav";
import HomeContent from "./HomeContent";

import "../../styles/homestyles.css";
const HomePage = ({ loggedUser }) => {
  return (
    <div>
      <div className="home-main__wrapper">
        <div>
          <Nav />
        </div>

        <div className="home-content__wrapper">
          <HomeContent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
