import React from "react";
import "./signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import { signup } from "../../service/api";

const Signup = ({ toggleSignup }) => {
  const initialValues = {
    fullname: "",
    email: "",
    contact: "",
    username: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const [user, setUser] = useState(initialValues);
  // const { fullname, email, contact, username, password } = user;

  const AllUserDetails = async (e) => {
    e.preventDefault();
    //-----------------------------------------------------------kartik
    await signup(user);
    toast.success("done");
    toggleSignup();
  };

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
    setValues({ ...values, [e.target.name]: [e.target.value] });
    console.log(values);
  };

  const handleValidation = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };

  const Validation = (values) => {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern =
      /(?=^.{8,12}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    const contact_pattern = /^\d{10}$/;

    if (!values.fullname) {
      error.fullname = "Fullname is required!";
    }

    if (!values.email) {
      error.email = "Email is required!";
    } else if (!email_pattern.test(values.email)) {
      error.email = "This is not a valid email format.";
    }

    if (!values.contact) {
      error.contact = "Contact is required!";
    } else if (!contact_pattern.test(values.contact)) {
      error.contact = "This is not a valid Contact Number.";
    }

    if (!values.username) {
      error.username = "Username is required!";
    }

    if (!values.password) {
      error.password = "Password is required!";
    } else if (!password_pattern.test(values.password)) {
      error.password = "This is not a valid password format.";
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
                  onChange={handleInput}
                  type="text"
                  className="input1"
                  id="fullname"
                  name="fullname"
                  value={values.fullname}
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
                  onChange={handleInput}
                  type="email"
                  className="input"
                  id="email"
                  name="email"
                  value={values.email}
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
                  onChange={handleInput}
                  type="number"
                  className="input"
                  id="contact"
                  name="contact"
                  value={values.contact}
                  placeholder="Enter Contact Number"
                  maxLength={10}
                  required
                />
                {errors.contact && (
                  <span className="formerror">{errors.contact}</span>
                )}
              </div>
              <div className="suserinput" id="values">
                <label htmlFor="username">username</label>
                <input
                  onChange={handleInput}
                  type="text"
                  className="input"
                  id="username"
                  name="username"
                  value={values.username}
                  placeholder="Create username"
                  required
                />
                {errors.username && (
                  <span className="formerror">{errors.username}</span>
                )}
              </div>
              <div className="suserinput" id="password">
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleInput}
                  type="password"
                  className="input"
                  id="password"
                  name="password"
                  value={values.password}
                  placeholder="Create Password"
                  required
                />
                {errors.password && (
                  <span className="formerror">{errors.password}</span>
                )}
              </div>
            </div>
            <div className="ssubmit">
              <ToastContainer />
              <input
                onClick={handleValidation}
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
        <div className="account">
          <div className="have">
            <p className="already">
              Already have a account?{" "}
              <Link
                to="/login"
                id="login"
                // onClick={toggleLogin()}
              >
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
