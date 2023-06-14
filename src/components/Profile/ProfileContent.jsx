import React, { useEffect, useState } from "react";
import { GET_POSTS } from "../../assets/js/API_AUTH";

const ProfileContent = () => {
  const [profileData, setProfileData] = useState([]);
  const profileId = JSON.parse(localStorage.getItem("id"));
  useEffect(() => {
    fetch(GET_POSTS)
      .then((res) => res.json())
      .then((data) => {
        setProfileData(data);
      });
  }, []);

  return (
    <div>
      <div className="profile-content__wrapper">
        {profileData.map((items) =>
          items.postUserId === profileId ? (
            <button className="btn-img" key={items.id}>
              <img
                className="profile-image-content"
                src={`https://localhost:7167/uploads/${items.postImagePathName}`}
              />
            </button>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
