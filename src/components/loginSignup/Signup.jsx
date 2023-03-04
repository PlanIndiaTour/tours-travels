import React from "react";

import "./signup.css";

import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="signupContainer">
        <div className="signupHeading">
          <h1>Signup for PlanIT</h1>
        </div>
        <div classNameName="signupContent">
          <form
            action="#"
            name="signupForm"
            className="signupForm"
            id="signupForm"
            method="post"
          >
            <div className="suserdata">
              <div className="suserinput" id="name">
                <label for="fullname">Full Name</label>
                <input
                  type="text"
                  className="input1"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter Full Name"
                  required
                />
                {/* <i className="fa-solid fa-circle-check"></i> */}
                {/* <i className="fa-solid fa-circle-exclamation"></i> */}
                <span className="formerror"></span>
              </div>
              <div className="suserinput" id="email">
                <label for="email">Email Address</label>
                <input
                  type="text"
                  className="input"
                  id="email"
                  name="email"
                  placeholder="Enter Email Address"
                  required
                />
                {/* <i className="fa-solid fa-circle-check"></i> */}
                {/* <i className="fa-solid fa-circle-exclamation"></i> */}
                <span className="formerror"></span>
              </div>
              <div className="suserinput" id="number">
                <label for="contact">Contact Number</label>
                <input
                  type="text"
                  className="input"
                  id="contact"
                  name="contact"
                  placeholder="Enter Contact Number"
                  required
                />
                {/* <i className="fa-solid fa-circle-check"></i> */}
                {/* <i className="fa-solid fa-circle-exclamation"></i> */}
                <span className="formerror"></span>
              </div>
              <div className="suserinput" id="user">
                <label for="username">Username</label>
                <input
                  type="text"
                  className="input"
                  id="username"
                  name="username"
                  placeholder="Create Username"
                  required
                />
                {/* <i className="fa-solid fa-circle-check"></i> */}
                {/* <i className="fa-solid fa-circle-exclamation"></i> */}
                <span className="formerror"></span>
              </div>
              <div className="suserinput" id="password">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="input"
                  id="password"
                  name="password"
                  placeholder="Create Password"
                  required
                />
                {/* <i className="fa-solid fa-circle-check"></i> */}
                {/* <i className="fa-solid fa-circle-exclamation"></i> */}
                <span className="formerror"></span>
              </div>
            </div>
            <div className="ssubmit">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
        <div className="account">
          <div className="have">
            <p className="already">
              Already have a account?{" "}
              <Link to="/login" id="login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
