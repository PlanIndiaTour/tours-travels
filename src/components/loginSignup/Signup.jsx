import React from "react";
import { useState } from "react";
import "./signup.css";
import { signup } from "../../service/api";
import { Link } from "react-router-dom";

const initialValues = {
  fullname: "",
  email: "",
  contact: "",
  username: "",
  password: "",
};

const Signup = ({ toggleSignup }) => {
  const [user, setUser] = useState(initialValues);
  const { fullname, email, contact, username, password } = user;
  const [errors, setErrors] = useState({}); //omkar

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const AllUserDetails = async (e) => {
    e.preventDefault();
    //-----------------------------------------------------------------kartik
    setErrors(Validation(user));
    await signup(user);
    toggleSignup();
    // toggleLogin();
  };

  const Validation = (user) => {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]+$/;
    // const user_pattern = /^[a-zA-Z][a-zA-Z0-9-_]{4,}$/;
    if (!user.fullname) {
      error.fullname = "Fullname is required!";
    }
    if (!user.email) {
      error.email = "Email is required!";
    } else if (!email_pattern.test(user.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!user.contact) {
      error.contact = "Contact is required!";
    }
    if (!user.username) {
      error.username = "username is required!";
    }
    if (!user.password) {
      error.password = "Password is required!";
    } else if (!password_pattern.test(user.password)) {
      error.password = "This is not a valid email format!";
    } else if (user.password.length < 8) {
      error.password = "Password must be more than 8 characters";
    } else if (user.password.length > 12) {
      error.password = "Password cannot exceed more than 12 characters";
    }

    return error;
  };

  return (
    <>
      <div className="signupContainer">
        <div className="signupHeading">
          <h1>Signup For PlanIT</h1>
        </div>
        <div className="signupContent">
          <form
            onSubmit={AllUserDetails}
            name="signupForm"
            className="signupForm"
            id="signupForm"
          >
            <div className="suserdata">
              <div className="suserinput" id="name">
                <label htmlFor="fullname">Full Name</label>
                <input
                  onChange={(e) => onValueChange(e)}
                  type="text"
                  className="input1"
                  id="fullname"
                  name="fullname"
                  value={fullname}
                  placeholder="Enter Full Name"
                  required
                />
                {errors.fullname && (
                  <span className="formerror">{errors.fullname}</span>
                )}
              </div>
              <div className="suserinput" id="email">
                <label htmlFor="email">Email Address</label>
                <input
                  onChange={(e) => onValueChange(e)}
                  type="text"
                  className="input"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter Email Address"
                  required
                />
                {errors.email && (
                  <span className="formerror">{errors.email}</span>
                )}
              </div>
              <div className="suserinput" id="number">
                <label htmlFor="contact">Contact Number</label>
                <input
                  onChange={(e) => onValueChange(e)}
                  type="text"
                  className="input"
                  id="contact"
                  name="contact"
                  value={contact}
                  placeholder="Enter Contact Number"
                  required
                />
                {errors.contact && (
                  <span className="formerror">{errors.contact}</span>
                )}
              </div>
              <div className="suserinput" id="user">
                <label htmlFor="username">Username</label>
                <input
                  onChange={(e) => onValueChange(e)}
                  type="text"
                  className="input"
                  id="username"
                  name="username"
                  value={username}
                  placeholder="Create Username"
                  required
                />
                {errors.username && (
                  <span className="formerror">{errors.username}</span>
                )}
              </div>
              <div className="suserinput" id="password">
                <label htmlFor="password">Password</label>
                <input
                  onChange={(e) => onValueChange(e)}
                  type="password"
                  className="input"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Create Password"
                  required
                />
                {errors.password && (
                  <span className="formerror">{errors.password}</span>
                )}
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