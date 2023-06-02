import React, { useEffect, useState } from "react";
import { VALIDATE_PASSWORD } from "../../assets/js/API_AUTH";

const SigninForm = () => {
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState([]);
  const [userUserName, setUserUserName] = useState("");

  const validatePassword = () => {
    return password.length >= 8;
  };

  useEffect(() => {
    const validatePass = validatePassword();
    if (validatePass) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
    }
  }, [password]);

  const loginClicked = (e) => {
    e.preventDefault();
    fetch(VALIDATE_PASSWORD, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        UserFirstName: "firstName",
        UserLastName: "lastName",
        UserEmail: "email",
        UserMobileNumber: "mobilenum",
        UserGender: "gender",
        UserUserName: userUserName,
        UserPassword: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
      });
  };

  return (
    <div>
      <form>
        <div>
          <input
            className="input-uname"
            type="text"
            placeholder="username"
            onChange={(e) => setUserUserName(e.target.value)}
          />
          <br />
          <input
            className="input-passw"
            type={showPassword === true ? "text" : "password"}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="btn-showPass"
            onClick={() => setShowPassword(!showPassword)}
          >
            show
          </button>
        </div>

        <div>
          <button
            className={
              passwordValidation === true ? "form-signin__btn" : "btn-disabled"
            }
            disabled={passwordValidation === true ? false : true}
            onClick={loginClicked}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
