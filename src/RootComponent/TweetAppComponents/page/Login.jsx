import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../tweetAppService/authService";
import { toast } from "react-toastify";
import "./page.css";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    if (!username || !password) {
      setErrors(true);
      return;
    }
    authService.login(username, password).then((res) => {
      console.log(res.data);
      if (res.data.status === "SUCCESS") {
        toast.success("Login Successfull", {
          position: toast.POSITION.BOTTOM_CENTER,
        });

        localStorage.setItem("user", JSON.stringify(res.data));
        //localStorage.setItem("user", JSON.stringify(res.data.token));
        navigate("/tweet");
        window.location.reload(false);
      } else {
        toast.error("Login Failed " + res.data.msg);
      }
    });
  }
  return (
    <div className="login_form">
      <div className="form-body">
        <h1 className="head">Login</h1>
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
            placeholder="Enter your Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        {error && !username && (
          <div className="error_login">User Name is required</div>
        )}
        <div>
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && !password && (
          <div className="error_login">Password is required</div>
        )}
        <br />
        <div className="button">
          <button className="btn btn-success" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div className="head">
          Forgot Password? <Link to="/forgot">Reset Password</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
