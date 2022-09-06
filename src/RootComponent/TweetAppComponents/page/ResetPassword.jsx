import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../tweetAppService/authService";
import "./page.css";
function ResetPassword() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  function handleResetPassword() {
    authService.forgot(username, password, confirmPassword).then((res) => {
      console.log(res.data);
    });
    navigate("/");
  }

  return (
    <div className="form">
      <div className="form-body">
        <h1 className="head">Reset Password</h1>
        <div>
          <label className="form__label" htmlFor="username">
            UserName
          </label>
          <input
            className="form__input"
            type="text"
            name="username"
            id="username"
            value={username}
            placeholder="Enter your UserName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label className="form__label" htmlFor="newPassword">
            NewPassword
          </label>
          <input
            className="form__input"
            type="password"
            name="password"
            id="password"
            placeholder="Enter new Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="form__label" htmlFor="confirmPassword">
            ConfirmPassword
          </label>
          <input
            className="form__input"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Enter confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <br />
        <div className="button">
          <button className="btn btn-primary" onClick={handleResetPassword}>
            Reset Password
          </button>
        </div>

        <br />
      </div>
    </div>
  );
}
export default ResetPassword;
