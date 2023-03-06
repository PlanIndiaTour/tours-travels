import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Signup from "../loginSignup/Signup";

const Login = (props) => {
  const [signup, setSignup] = useState(false);

  const toggleSignup = () => {
    setSignup(!signup);
  };

  return (
    <>
      <div className="loginContainer">
        <div className="loginHeading">
          <h1>Login To PlanIT</h1>
        </div>
        <div className="loginContent">
          <form
            action="#"
            name="loginform"
            className="loginform"
            id="loginform"
          >
            <div className="userinput">
              <label for="username">Username</label>
              <input
                type="text"
                id="user"
                name="user"
                placeholder="username, email, or phonenumber"
                required
              />
            </div>
            <div className="userinput">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required
              />
            </div>
            <div className="lsubmit">
              <input type="submit" value="Log in" />
            </div>
          </form>
        </div>
        <div className="account">
          <div className="forgotpassword">
            <Link to="/" className="fp">
              forgot password?
            </Link>
          </div>
          <div className="donthave">
            <p>
              Don't have a account?{" "}
              <Link to="/" className="su" onClick={toggleSignup}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {signup && (
        <div className="signin">
          <div className="overlay" onClick={toggleSignup}></div>
          <Signup />
        </div>
      )}
    </>
  );
};

export default Login;
