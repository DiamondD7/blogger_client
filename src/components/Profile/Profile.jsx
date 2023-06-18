import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { User, Plus } from "phosphor-react";
import ProfileContent from "./ProfileContent";
import {
  ADD_USER_PICTURE,
  GET_A_USER,
  PUT_USER,
  GET_A_USERPROFILE,
} from "../../assets/js/API_AUTH";

import "../../styles/profilestyles.css";

const Profile = () => {
  const [userProfilePicture, setUserProfilePicture] = useState(null);
  const [userImagePathName, setUserImagePathName] = useState("");
  const [isImageSaved, setIsImageSaved] = useState(false);
  const [userData, setUserData] = useState([]);
  const [editDescription, setEditDescription] = useState(false);
  const [description, setDescription] = useState("");

  const [pinnedOne, setPinnedOne] = useState("");
  const [pinnedTwo, setPinnedTwo] = useState("");
  const [pinnedThree, setPinnedThree] = useState("");
  const [profileData, setProfileData] = useState([]);

  // PROFILE PICTURE FUNCTIONS
  useEffect(() => {
    fetch(`${GET_A_USER}/${localStorage.getItem("id")}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  useEffect(() => {
    const formData = new FormData();
    formData.append("UserProfilePicture", userProfilePicture);
    fetch(ADD_USER_PICTURE, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setUserImagePathName(data.imagePathName);
        setIsImageSaved(true);
      });
  }, [userProfilePicture]);

  useEffect(() => {
    if (isImageSaved === true) {
      fetch(`${PUT_USER}/${localStorage.getItem("id")}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          UserId: userData.userId,
          UserProfilePicture: userImagePathName,
          UserFirstName: userData.userFirstName,
          UserLastName: userData.userLastName,
          UserEmail: userData.userEmail,
          UserGender: userData.userGender,
          UserMobileNumber: userData.userMobileNumber,
          UserUserName: userData.userUserName,
          UserPassword: userData.userPassword,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Profile picture updated");
        });
    }
  }, [isImageSaved]);

  // PROFILE PICTURE FUNCTIONS

  // USER PROFILE FUNCTIONS
  useEffect(() => {
    fetch(`${GET_A_USERPROFILE}/${localStorage.getItem("id")}`)
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data); //stored the whole JSON data
        setDescription(data.description);
        setPinnedOne(data.pinnedOne);
        setPinnedTwo(data.pinnedTwo);
        setPinnedThree(data.pinnedThree);
      });
  }, []);
  // USER PROFILE FUNCTIONS

  return (
    <div>
      <div className="home-main__wrapper">
        <div>
          <Nav />
        </div>
        <div className="profile-user-details__wrapper">
          <div>
            <label className="btn-image__unknown">
              <Plus size={12} color="white" />
              <input
                type="file"
                onChange={(e) => setUserProfilePicture(e.target.files[0])}
              />
            </label>
            {userData.userProfilePicture === null ? (
              <User size={70} color="white" />
            ) : userData.userProfilePicture !== null ? (
              <img
                className="profile-picture__image"
                src={
                  isImageSaved === false
                    ? `https://localhost:7167/userprofilepics/${userData.userProfilePicture}`
                    : `https://localhost:7167/userprofilepics/${userImagePathName}`
                }
                alt="profile-picture"
              />
            ) : (
              ""
            )}
          </div>
          <div>
            <div>
              <p>
                {userData.userFirstName} {userData.userLastName}
              </p>
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
              {description}
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
        <button
          className="edit-profile-description__button"
          onClick={() => setEditDescription(true)}
        >
          EDIT
        </button>

        <div className="profile-main__wrapper">
          <ProfileContent />
        </div>
      </div>

      {editDescription === true ? (
        <div>
          <div className="overlay"></div>
          <div className="description-container__wrapper">
            <textarea
              className="description__wrapper"
              placeholder="Tell the world about yourself"
            ></textarea>

            <button
              className="cancel__btn"
              onClick={() => setEditDescription(false)}
            >
              CANCEL
            </button>
            <button className="update__btn">UPDATE</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;
