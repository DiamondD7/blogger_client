import React from "react";

import "../../styles/signinstyles.css";
import SigninForm from "./Signin-form";
const SignIn = () => {
  return (
    <div>
      <div className="signin-main__wrapper">
        <div>
          <h1>Sign In</h1>
          <SigninForm />

          <div>
            <p className="p-alreadyhaveaccount__text">
              Already have an account? Click <a href="#">here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
