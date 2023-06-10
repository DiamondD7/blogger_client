import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Funnel, Plus } from "phosphor-react";
import { GET_POSTS, DELETE_POST, GET_USERS } from "../../assets/js/API_AUTH";
import moment from "moment";

import "../../styles/homecontentstyles.css";
const HomeContent = () => {
  const [feedData, setFeedData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    fetch(GET_POSTS)
      .then((res) => res.json())
      .then((data) => {
        setFeedData(data);
      });
  }, []);

  useEffect(() => {
    fetch(GET_USERS)
      .then((res) => res.json())
      .then((data) => {
        setUsersData(data);
      });
  }, []);

  return (
    <div>
      <div className="filter-icon__wrapper">
        <button className="filter-icon">
          <Funnel size={25} color=" rgba(217, 217, 217, 0.66)" />
        </button>
        <Link
          to="/addarticle"
          style={{
            textDecoration: "none",
            padding: "5px 20px",
            transition: "all 0.2s ease-in",
          }}
        >
          <Plus size={25} color=" rgba(217, 217, 217, 0.66)" />
        </Link>
      </div>

      <div className="content-main__wrapper">
        <img
          className="image-blog"
          src="https://images.unsplash.com/photo-1538115081112-32c7d8401807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="example pic"
        />

        <Link
          className="content-link"
          style={{
            textDecoration: "none",
            padding: "5px 20px",
            transition: "all 0.2s ease-in",
          }}
          to="/article"
        >
          <h1>The Police are rioting. We need to talk about it.</h1>
          <div className="content-details__wrapper">
            <p>The New York Times</p>
            <p>5/12/2023</p>
          </div>
        </Link>
      </div>

      {feedData.map((items) => (
        <div className="content-main__wrapper" key={items.id}>
          <img
            className="image-blog"
            src={`https://localhost:7167/uploads/${items.postImagePathName}`}
            alt="example pic"
          />

          <Link
            className="content-link"
            style={{
              textDecoration: "none",
              padding: "5px 20px",
              transition: "all 0.2s ease-in",
            }}
            to="/article"
          >
            <h1>{items.postTitle}</h1>
            <div className="content-details__wrapper">
              {usersData.map((users) => (
                <p key={users.userId} className="author">
                  {items.postUserId === users.userId
                    ? `${users.userFirstName} ${users.userLastName}`
                    : ""}
                </p>
              ))}
              <p>{moment(items.createdOn).format("DD/MM/YYYY")}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
