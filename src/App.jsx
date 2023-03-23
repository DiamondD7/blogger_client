import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";
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
          <SignIn />
        )}
      </div>
    </div>
  );
};

export default App;
