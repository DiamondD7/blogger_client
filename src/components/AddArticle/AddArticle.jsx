import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ADD_POSTS, ADD_POST_IMAGE } from "../../assets/js/API_AUTH";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "../../styles/addarticle.css";

const AddArticle = ({ loggedUser }) => {
  const [coverImage, setCoverImage] = useState(null);
  const [description, setDescription] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postImagePathName, setPostImagePathName] = useState("");
  const [anon, setAnon] = useState("");

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
        PostUserId: loggedUser.userId,
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
        console.log(data);
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
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <div>
          <input
            className="form-article-description__input"
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-article-coverpicture__wrapper">
          <div>
            <label className="form-article-label__text">Cover Picture</label>
            <input type="file" onChange={imageOnChange} />
          </div>
          <div>
            <button
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
              name="anonymousorno"
              onChange={(e) => setAnon(e.target.value)}
            />

            <label htmlFor="notanonymous">No</label>
            <input
              type="radio"
              id="notanonymous"
              value="false"
              name="anonymousorno"
              onChange={(e) => setAnon(e.target.value)}
            />
          </div>
          <div className="form-article-submission__wrapper">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Back
            </Link>
            <button type="submit" className="form-article-btn__submit">
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
