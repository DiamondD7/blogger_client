import React from "react";
import { Link } from "react-router-dom";

import "../../styles/homecontentstyles.css";
const HomeContent = () => {
  return (
    <div>
      <div className="content-main__wrapper">
        <img
          className="image-blog"
          src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="example pic"
        />

        <Link
          className="content-link"
          style={{
            textDecoration: "none",
            padding: "5px 20px",
            transition: "all 0.2s ease-in",
          }}
        >
          <h1>Volleyball club champs to hit Tauranga</h1>
          <div className="content-details__wrapper">
            <p>The Bay's News First</p>
            <p>8/12/2023</p>
          </div>
        </Link>
      </div>

      <div className="content-main__wrapper">
        <img
          className="image-blog"
          src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="example pic"
        />

        <Link
          className="content-link"
          style={{
            textDecoration: "none",
            padding: "5px 20px",
            transition: "all 0.2s ease-in",
          }}
        >
          <h1>Volleyball club champs to hit Tauranga</h1>
          <div className="content-details__wrapper">
            <p>The Bay's News First</p>
            <p>8/12/2023</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
