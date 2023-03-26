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
                <NextRegisterPhase />
              </div>

              <div className="signup-btn__wrapper">
                <button type="button" className="signup-btn__submit">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextRegisterPhase = () => {
  return (
    <div>
      <div>
        <div>
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
        </div>
        <div className="security-questions__wrapper">
          <label>Security Questions</label>
          <div>
            <input type="text" placeholder="Question #1" />
            <input type="text" placeholder="Answer" />
          </div>

          <div>
            <input type="text" placeholder="Question #2" />
            <input type="text" placeholder="Answer" />
          </div>

          <div>
            <input type="text" placeholder="Question #3" />
            <input type="text" placeholder="Answer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
