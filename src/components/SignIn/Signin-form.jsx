import React, { useEffect, useState } from "react";

const SigninForm = () => {
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
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

  console.log(password);
  return (
    <div>
      <form>
        <div>
          <input className="input-uname" type="text" placeholder="username" />
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
            disabled={passwordValidation === true ? "false" : "true"}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
