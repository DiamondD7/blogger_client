import React, { useState, useEffect } from "react";
import { POST_USER } from "../../assets/js/API_AUTH";

import "../../styles/signupstyles.css";
const SignUp = () => {
  const [nextPhase, setNextPhase] = useState(false);

  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobileNumber, setUserMobileNumber] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userUserName, setUserUserName] = useState("");

  return (
    <div>
      <div className="signup-main__wrapper">
        <div>
          <h1>Register</h1>
          <div className="form-main-container__wrapper">
            <form>
              <div
                className={`default ${
                  nextPhase === true ? "slideLeft" : "default"
                }`}
              >
                <div className="user-fname-lname__wrapper">
                  <input
                    className="user-fname__input"
                    type="text"
                    placeholder="First name"
                    onChange={(e) => setUserFirstName(e.target.value)}
                  />
                  <br />
                  <input
                    className="user-lname__input"
                    type="text"
                    placeholder="Last name"
                    onChange={(e) => setUserLastName(e.target.value)}
                  />
                </div>

                <div className="user-email__wrapper">
                  <input
                    className="user-email__input"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>

                <div className="user-mobile-gender__wrapper">
                  <input
                    className="user-mobile__input"
                    type="text"
                    placeholder="Mobile number"
                    onChange={(e) => setUserMobileNumber(e.target.value)}
                  />

                  <select
                    className="user-gender__select"
                    onChange={(e) => setUserGender(e.target.value)}
                  >
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
                    onChange={(e) => setUserUserName(e.target.value)}
                  />
                </div>

                <div className="signup-btn__wrapper">
                  <button
                    type="button"
                    className="signup-btn__submit"
                    onClick={() => setNextPhase(!nextPhase)}
                  >
                    Next
                  </button>
                </div>
              </div>

              <div
                className={`nextphase__wrapper ${
                  nextPhase === true ? "nextphase-slideback" : ""
                }`}
              >
                <NextRegisterPhase
                  backphase={setNextPhase}
                  userFirstName={userFirstName}
                  userLastName={userLastName}
                  userEmail={userEmail}
                  userMobileNumber={userMobileNumber}
                  userGender={userGender}
                  userUserName={userUserName}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextRegisterPhase = ({
  backphase,
  userUserName,
  userGender,
  userMobileNumber,
  userEmail,
  userLastName,
  userFirstName,
}) => {
  const [userData, setUserData] = useState([]);
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPW, setValidPW] = useState(false);

  const [firstQuestion, setFirstQuestion] = useState("");
  const [secondQuestion, setSecondQuestion] = useState("");
  const [thirdQuestion, setThirdQuestion] = useState("");

  const [firstAnswer, setFirstAnswer] = useState("");
  const [secondAnswer, setSecondAnswer] = useState("");
  const [thirdAnswer, setThirdAnswer] = useState("");

  const AddUser = (e) => {
    e.preventDefault();

    fetch(POST_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        UserFirstName: userFirstName,
        UserLastName: userLastName,
        UserEmail: userEmail,
        UserMobileNumber: userMobileNumber,
        UserGender: userGender,
        UserUserName: userUserName,
        UserPassword: userPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    if (confirmPassword === userPassword && userPassword.length >= 8) {
      setValidPW(true);
    } else {
      setValidPW(false);
    }
  }, [userPassword, confirmPassword]);

  return (
    <div>
      <div>
        <div>
          <input
            className="password-input"
            type="password"
            placeholder="Password (must be 8 or more characters long)"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <br />
          <input
            className="confirmpassword-input"
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="security-questions__wrapper">
          <h2 className="security-header-text">Security Questions</h2>
          <div>
            <input
              className="form-inputs"
              type="text"
              placeholder="Question #1"
              onChange={(e) => setFirstQuestion(e.target.value)}
            />
            <input
              className="form-inputs"
              type="text"
              placeholder="Answer"
              onChange={(e) => setFirstAnswer(e.target.value)}
            />
          </div>

          <div>
            <input
              className="form-inputs"
              type="text"
              placeholder="Question #2"
              onChange={(e) => setSecondQuestion(e.target.value)}
            />
            <input
              className="form-inputs"
              type="text"
              placeholder="Answer"
              onChange={(e) => setSecondAnswer(e.target.value)}
            />
          </div>

          <div>
            <input
              className="form-inputs"
              type="text"
              placeholder="Question #3"
              onChange={(e) => setThirdQuestion(e.target.value)}
            />
            <input
              className="form-inputs"
              type="text"
              placeholder="Answer"
              onChange={(e) => setThirdAnswer(e.target.value)}
            />
          </div>

          <div>
            <button
              type="button"
              className="signup-btn-nextPhase"
              onClick={() => backphase(false)}
            >
              Back
            </button>
            <button
              type="button"
              className={
                validPW === true
                  ? "signup-btn-nextPhase"
                  : "signup-btn__disabled"
              }
              disabled={validPW === true ? false : true}
              onClick={AddUser}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
