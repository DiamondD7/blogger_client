import React from "react";
import Nav from "../Nav/Nav";

import "../../styles/profilestyles.css";

const Profile = () => {
  return (
    <div>
      <div className="home-main__wrapper">
        <div>
          <Nav />
        </div>
        <div className="profile-user-details__wrapper">
          <img
            className="profile-picture__image"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="profile-picture"
          />
          <p>Jackie Simons</p>
        </div>
        <div className="profile-user-summary__wrapper">
          <a href="#" style={{ textDecoration: "none" }}>
            https://www.mysite.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
