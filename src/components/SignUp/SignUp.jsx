import React from "react";

import "../../styles/signupstyles.css";
const SignUp = () => {
  return (
    <div>
      <div className="signup-main__wrapper">
        <div>
          <h1>Register</h1>
          <div className="form-main-container__wrapper">
            <form>
              <div className="user-fname-lname__wrapper">
                <input
                  className="user-fname__input"
                  type="text"
                  placeholder="First name"
                />
                <br />
                <input
                  className="user-lname__input"
                  type="text"
                  placeholder="Last name"
                />
              </div>

              <div className="user-email__wrapper">
                <input
                  className="user-email__input"
                  type="text"
                  placeholder="Email"
                />
              </div>

              <div className="user-mobile-gender__wrapper">
                <input
                  className="user-mobile__input"
                  type="text"
                  placeholder="Mobile number"
                />

                <select className="user-gender__select">
                  <option>Gender</option>
                  <option></option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="user-username__wrapper">
                <input
                  className="user-username__input"
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div>
                <button className="signup-btn__submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
