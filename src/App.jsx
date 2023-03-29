import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";

import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";
import "./App.css";
import Profile from "./components/Profile/Profile";
const App = () => {
  const [authorized, setAuthorized] = useState(false);
  return (
    <div>
      <div>
        {/* {authorized ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        ) : (
          <div className="signin-app__container">
            <SignIn />
          </div>
        )} */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
