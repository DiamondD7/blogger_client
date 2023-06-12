import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Articles from "../Article/Article";
import { Funnel, Plus } from "phosphor-react";
import { GET_POSTS, DELETE_POST, GET_USERS } from "../../assets/js/API_AUTH";
import moment from "moment";

import "../../styles/homecontentstyles.css";
const HomeContent = () => {
  const [feedData, setFeedData] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const [articleOpen, setArticleOpen] = useState(false);

  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch(GET_POSTS)
      .then((res) => res.json())
      .then((data) => {
        setFeedData(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch(GET_USERS)
      .then((res) => res.json())
      .then((data) => {
        setUsersData(data);
      });
  }, []);

  const openArticle = (article) => {
    setArticleOpen(!articleOpen);
    setArticle(article);
  };

  return (
    <div>
      {articleOpen === false ? (
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

          {feedData !== null ? (
            <div>
              {feedData.map((items) => (
                <div className="content-main__wrapper" key={items.id}>
                  <img
                    className="image-blog"
                    src={`https://localhost:7167/uploads/${items.postImagePathName}`}
                    alt="example pic"
                  />

                  <button
                    className="content-link-btn"
                    onClick={() => openArticle(items)}
                  >
                    <h1>{items.postTitle}</h1>
                    <div className="content-details__wrapper">
                      {usersData.map((users) => (
                        <p key={users.userId} className="author">
                          {items.postUserId === users.userId &&
                          items.isAnon === "false"
                            ? `${users.userFirstName} ${users.userLastName}`
                            : items.postUserId === users.userId &&
                              items.isAnon === "true"
                            ? "Anonymous"
                            : ""}
                        </p>
                      ))}
                      <p>{moment(items.createdOn).format("DD/MM/YYYY")}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="loading-articles"></p>
          )}
        </div>
      ) : (
        <div>
          <Articles openArticle={openArticle} article={article} />
        </div>
      )}
    </div>
  );
};

export default HomeContent;
