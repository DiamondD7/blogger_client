import React from "react";

import "quill/dist/quill.snow.css";
import "../../styles/articlestyles.css";
const Article = ({ openArticle, article }) => {
  return (
    <div>
      <button onClick={openArticle}>Back</button>
      <div className="article__wrapper">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: article.postBody }}
        ></div>
      </div>
    </div>
  );
};

export default Article;
