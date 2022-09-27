import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./home.css";
import Login from "./Login";
import Register from "./Register";
function Home() {
  const [isSignup, setIsSignup] = useState(true);

  const toggleForm = () => {
    setIsSignup((prevState) => !prevState);
  };
  return (
    <div>
      <Header />
      <div>
        <div>
          <button
            type="button"
            className={`btn ${isSignup ? "btn-primary" : ""}`}
            onClick={toggleForm}
            disabled={isSignup}
          >
            Register
          </button>
          <button
            type="button"
            className={`btn ${!isSignup ? "btn-primary" : ""}`}
            // className={`px-8 py-2 w-1/2 ${
            //   !isSignup ? "bg-primary-1 text-black shadow-sm rounded-full" : ""
            // } `}
            onClick={toggleForm}
            disabled={!isSignup}
          >
            Login
          </button>
        </div>
        <div className="w-full mt-4">
          {isSignup && <Register />}
          {!isSignup && <Login />}
        </div>
        {/* <NavLink to="/">Login</NavLink>
      <NavLink to="/"> Register</NavLink> */}
      </div>
    </div>
  );
}

export default Home;
