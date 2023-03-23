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
              <div>
                <input type="text" placeholder="First name" />
                <br />
                <input type="text" placeholder="Last name" />
              </div>

              <div>
                <input type="text" placeholder="Email" />
                <br />
                <input type="text" placeholder="Mobile number" />
              </div>

              <div>
                <input type="text" placeholder="Username" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
