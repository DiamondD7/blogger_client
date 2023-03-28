import React from "react";
import Nav from "../Nav/Nav";

import "../../styles/homestyles.css";
import HomeContent from "./HomeContent";
const HomePage = () => {
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
