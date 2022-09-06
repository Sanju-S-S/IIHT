import React, { useState, useEffect } from "react";
import { NavItem } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import authService from "../../tweetAppService/authService";
import "./page.css";
function Register() {
  const [loginId, setloginId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     navigate("/");
  //   }
  // }, []);
  function handleRegister() {
    const user = authService
      .register(
        loginId,
        firstName,
        lastName,
        emailId,
        username,
        password,
        confirmPassword,
        contactNumber
      )
      .then((res) => {
        console.log("test", res.data);
        setUsers(res.data);
        if (res.data) {
          localStorage.setItem("user-info", JSON.stringify(res.data));
          navigate("/tweet");
        }
      });
  }
  function handleInputChange(event) {
    const { id, value } = event.target;
    if (id === "loginId") {
      setloginId(value);
    } else if (id === "firstName") {
      setFirstName(value);
    } else if (id === "lastName") {
      setLastName(value);
    } else if (id === "email") {
      setEmailId(value);
    } else if (id === "username") {
      setUserName(value);
    } else if (id === "password") {
      setPassword(value);
    } else if (id === "confirmPassword") {
      setConfirmPassword(value);
    } else if (id === "contactNumber") {
      setContactNumber(value);
    }
  }
  return (
    <div className="form">
      <div className="form-body">
        <div className="head">
          <h1>
            <b>Register Page</b>
          </h1>
        </div>
        <div className="loginId">
          <label className="form__label" htmlFor="loginId">
            Login Id
          </label>
          <input
            className="form__input"
            type="text"
            id="loginId"
            required
            value={loginId}
            onChange={(e) => handleInputChange(e)}
            placeholder="Login Id"
          />
        </div>
        <div className="username">
          <label className="form__label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            placeholder="FirstName"
          />
        </div>
        <div className="lastname">
          <label className="form__label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            required
            value={lastName}
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="LastName"
          />
        </div>
        <div className="email">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={emailId}
            required
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="username">
          <label className="form__label" htmlFor="username">
            Username
          </label>
          <input
            className="form__input"
            type="text"
            id="username"
            value={username}
            required
            onChange={(e) => handleInputChange(e)}
            placeholder="Username"
          />
        </div>
        <div className="password">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
        </div>
        <div className="contact-number">
          <label className="form__label" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            className="form__input"
            type="text"
            id="contactNumber"
            required
            value={contactNumber}
            onChange={(e) => handleInputChange(e)}
            placeholder="Contact Number"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          id="submit"
          onClick={handleRegister}
          className="btn btn-primary"
        >
          Register
        </button>
      </div>

      <NavItem>
        Already have an account?
        <NavLink to="/login">Login</NavLink>
      </NavItem>
    </div>
  );
}

export default Register;
