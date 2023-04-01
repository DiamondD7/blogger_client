import React from "react";
import Nav from "../Nav/Nav";
import { FiGlobe } from "react-icons/fi";

import "../../styles/profilestyles.css";
import ProfileContent from "./ProfileContent";

const Profile = () => {
  return (
    <div>
      <div className="home-main__wrapper">
        <div>
          <Nav />
        </div>
        <div className="profile-user-details__wrapper">
          <div>
            <img
              className="profile-picture__image"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="profile-picture"
            />
          </div>
          <div>
            <div>
              <p>Jackie Simons</p>
            </div>

            <div className="following-follower__wrapper">
              <p className="following-text">100 following</p>
              <p className="followers-text">277 followers</p>
            </div>
          </div>
        </div>
        <div className="profile-summary-pinned__wrapper">
          <div className="profile-user-summary__wrapper">
            <div className="profile-user-summary-second__wrapper">
              <FiGlobe size="17px" />
              <a href="#" style={{ textDecoration: "none" }}>
                https://www.mysite.com
              </a>
            </div>
          </div>

          <div>
            <div className="profile-user-pinned__wrapper">
              <div className="profile-user-summary-second__wrapper">
                <p className="pinned-icon__text">Pinned</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ProfileContent />
        </div>
      </div>
    </div>
  );
};

export default Profile;
