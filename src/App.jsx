import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";
import Article from "./components/Article/Article";

import "./App.css";
const App = () => {
  const [authorized, setAuthorized] = useState(false);
  return (
    <div>
      <div>
        {authorized ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        ) : (
          <div className="signin-app__container">
            <SignIn />
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
