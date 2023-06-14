import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";
import Article from "./components/Article/Article";
import AddArticle from "./components/AddArticle/AddArticle";

import "./App.css";
const App = () => {
  const [authorized, setAuthorized] = useState(false);
  const [loggedUser, setLoggedUser] = useState([]);
  const [userId, setUserId] = useState(loggedUser.userId);

  const setAuth = (value, userid) => {
    setAuthorized(value);
    localStorage.setItem("authorized", "true");
    localStorage.setItem("id", userid);
  };
  return (
    <div>
      <div>
        {localStorage.getItem("authorized") === "true" ? (
          <Routes>
            <Route path="/" element={<HomePage loggedUser={loggedUser} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/article" element={<Article />} />
            <Route
              path="/addarticle"
              element={<AddArticle loggedUser={loggedUser} />}
            />
          </Routes>
        ) : (
          <div className="signin-app__container">
            <SignIn setAuthorized={setAuth} loggedUser={setLoggedUser} />
          </div>
        )}

        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/article" element={<Article />} />
        </Routes> */}
      </div>
    </div>
  );
};

export default App;
