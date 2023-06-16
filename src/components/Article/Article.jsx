import React from "react";
import { ArrowLeft } from "phosphor-react";

import "quill/dist/quill.snow.css";
import "../../styles/articlestyles.css";
const Article = ({ openArticle, article }) => {
  return (
    <div>
      <button className="btn-back" onClick={(e) => openArticle(e, article)}>
        <ArrowLeft size={32} color="white" />
      </button>
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
