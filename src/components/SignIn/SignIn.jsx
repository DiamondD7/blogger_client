import React, { useState } from "react";
import SigninForm from "./Signin-form";
import { Routes, Route, Link } from "react-router-dom";

import "../../styles/signinstyles.css";
import SignUp from "../SignUp/SignUp";
const SignIn = () => {
  const [goToSignIn, setGoToSignIn] = useState(false);
  return (
    <div>
      {goToSignIn ? (
        <SignUp />
      ) : (
        <div className="signin-main__wrapper">
          <div>
            <h1>Sign In</h1>
            <SigninForm />

            <div>
              <p className="p-alreadyhaveaccount__text">
                Already have an account? Click{" "}
                <a
                  className="gosignin-anchor"
                  onClick={() => setGoToSignIn(true)}
                >
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
