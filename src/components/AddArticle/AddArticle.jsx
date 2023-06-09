import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "../../styles/addarticle.css";
const AddArticle = () => {
  const [value, setValue] = useState("");
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
  return (
    <div>
      <form className="form-article__wrapper">
        <input
          className="form-article-title__input"
          type="text"
          placeholder="Title"
        />
        <div>
          <input
            className="form-article-description__input"
            type="text"
            placeholder="Description"
          />
        </div>
        <div className="form-article-coverpicture__wrapper">
          <label className="form-article-label__text">Cover Picture</label>
          <input type="file" />
        </div>

        <div className="form-article-anon__wrapper">
          <label>Anonymous?</label>
          <br />
          <label htmlFor="anonymous">Yes</label>
          <input
            type="radio"
            id="anonymous"
            value={true}
            name="anonymousorno"
          />

          <label htmlFor="notanonymous">No</label>
          <input
            type="radio"
            id="notanonymous"
            value={false}
            name="anonymousorno"
          />
        </div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          className="article-editor"
        />
      </form>
    </div>
  );
};

export default AddArticle;
