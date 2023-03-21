import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";

import "./App.css";
const App = () => {
  return (
    <div>
      <div>
        <SignIn />
      </div>
    </div>
  );
};

export default App;
