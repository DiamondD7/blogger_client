import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ADD_POSTS, ADD_POST_IMAGE } from "../../assets/js/API_AUTH";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "../../styles/addarticle.css";

const AddArticle = ({ loggedUser, article, setEditModal }) => {
  const userId = JSON.parse(localStorage.getItem("id"));
  const [coverImage, setCoverImage] = useState(null);
  const [description, setDescription] = useState(
    article === undefined ? "" : article.description
  );
  const [postTitle, setPostTitle] = useState(
    article === undefined ? "" : article.postTitle
  );
  const [postBody, setPostBody] = useState(
    article === undefined ? "" : article.postBody
  );
  const [postImagePathName, setPostImagePathName] = useState("");
  const [anon, setAnon] = useState(article === undefined ? "" : article.isAnon);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ direction: "rtl" }],

      ["clean"],
    ],
  };
  const imageOnChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const savePosts = () => {
    fetch(ADD_POSTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        PostUserId: userId,
        Description: description,
        PostTitle: postTitle,
        isAnon: anon,
        PostBody: postBody,
        PostImagePathName: postImagePathName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    window.location.reload();
  };

  const saveImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("PostImage", coverImage);

    fetch(ADD_POST_IMAGE, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); //delete this
        setPostImagePathName(data.imagePathName);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <form onSubmit={savePosts} className="form-article__wrapper">
        <input
          className="form-article-title__input"
          type="text"
          placeholder="Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <div>
          <input
            className="form-article-description__input"
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-article-coverpicture__wrapper">
          <div>
            <label className="form-article-label__text">Cover Picture</label>
          </div>
          <div>
            <input
              className="imageCover__input"
              type="file"
              onChange={imageOnChange}
            />

            <button
              className="save-btn__imageCover"
              onClick={saveImage}
              disabled={coverImage === null ? true : false}
            >
              Save
            </button>
          </div>
        </div>

        <div className="form-article-anon__wrapper">
          <div>
            <label>Anonymous?</label>
            <br />
            <label htmlFor="anonymous">Yes</label>
            <input
              type="radio"
              id="anonymous"
              value="true"
              checked={anon === "true" ? "checked" : ""}
              name="anonymousorno"
              onChange={(e) => setAnon(e.target.value)}
            />

            <label htmlFor="notanonymous">No</label>
            <input
              type="radio"
              id="notanonymous"
              value="false"
              checked={anon === "false" ? "checked" : ""}
              name="anonymousorno"
              onChange={(e) => setAnon(e.target.value)}
            />
          </div>
          <div className="form-article-submission__wrapper">
            {article === undefined ? (
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Back
              </Link>
            ) : (
              <button
                className="form-article-btn__cancel"
                onClick={() => setEditModal(false)}
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className={`form-article-btn__submit ${
                postImagePathName === "" ? "btn-disabled" : ""
              }`}
              disabled={postImagePathName === "" ? true : false}
            >
              Submit
            </button>
          </div>
        </div>
        <ReactQuill
          theme="snow"
          value={postBody}
          onChange={setPostBody}
          modules={modules}
          className="article-editor"
        />
      </form>
    </div>
  );
};

export default AddArticle;
