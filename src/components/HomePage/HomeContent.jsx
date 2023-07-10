import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Articles from "../Article/Article";
import { Funnel, Plus, DotsThree } from "phosphor-react";
import { GET_POSTS, DELETE_POST, GET_USERS } from "../../assets/js/API_AUTH";
import moment from "moment";

import "../../styles/homecontentstyles.css";
const HomeContent = () => {
  const [feedData, setFeedData] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const [articleOpen, setArticleOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [article, setArticle] = useState([]);
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

  const openArticle = (e, article) => {
    e.preventDefault();
    setArticleOpen(!articleOpen);
    setArticle(article);
  };

  const deletePost = (id) => {
    fetch(`${DELETE_POST}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        //this is to refresh the updated posts
        fetch(GET_POSTS)
          .then((res) => res.json())
          .then((data) => {
            setFeedData(data);
            setDeleteModal(!deleteModal);
          });
      });
  };

  return (
    <div>
      <div className={deleteModal === true ? "overlay" : ""}></div>
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
                <div>
                  <img
                    className="image-blog"
                    src={`https://localhost:7167/uploads/${items.postImagePathName}`}
                    alt="example pic"
                  />
                </div>

                <div>
                  <div className="menu-modal__wrapper">
                    <ul>
                      <li></li>
                      <li>
                        <button>Report</button>
                      </li>
                      <li>
                        <button>Save</button>
                      </li>
                      <li>
                        <button>Edit</button>
                      </li>
                      <li>
                        <button onClick={() => setDeleteModal(true)}>
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>

                  {deleteModal && (
                    <div className="delete-prompt__wrapper">
                      <p>Are you sure you want to delete?</p>
                      <button
                        className="cancel-delete-prompt__btn"
                        onClick={() => setDeleteModal(!deleteModal)}
                      >
                        Cancel
                      </button>
                      <button
                        className="delete-prompt__btn"
                        onClick={() => deletePost(items.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}

                  <div className="content-link__wrapper">
                    <button
                      className="content-link-btn"
                      onClick={(e) => openArticle(e, items)}
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
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="loading-articles"></p>
        )}
      </div>
      <div
        className={`article-opened__wrapper ${
          articleOpen === false ? "hidden" : ""
        }`}
      >
        <Articles openArticle={openArticle} article={article} />
      </div>
    </div>
  );
};

export default HomeContent;
