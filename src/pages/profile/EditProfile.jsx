// import React from 'react';
import { useState, useEffect } from "react";
import "./editprofile.css";
// import { signup } from "../../service/api";
import { Link, Navigate, redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getUser, editUser } from "../../service/api";
import Profile from "./Profile";

const initialValues = {
  fullname: "",
  email: "",
  contact: "",
  username: "",
  password: "",
};

const EditProfile = () => {
  const [user, setUser] = useState(initialValues);
  const { fullname, email, contact, username, password } = user;
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user)
  };

  // const AllUserDetails = async () => {
  //     await editUser(user, id);
  //     navigate('/profile');
  // }

  return (
    <div>
      <div className="signupContainer">
        <div className="signupHeading">
          <h1>Edit Your Profile</h1>
        </div>
        <div className="signupContent">
          <form
            // onSubmit={editUserDetails}
            // action="/profile "
            name="signupForm"
            className="signupForm"
            id="signupForm"
            method="post"
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
                {/* <i className="fa-solid fa-circle-check"></i> */}
                {/* <i className="fa-solid fa-circle-exclamation"></i> */}
                <span className="formerror"></span>
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
                {/* <i className="fa-solid fa-circle-check"></i> */}
                {/* <i className="fa-solid fa-circle-exclamation"></i> */}
                <span className="formerror"></span>
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
                {/* <i className="fa-solid fa-circle-check"></i> */}
                {/* <i className="fa-solid fa-circle-exclamation"></i> */}
                <span className="formerror"></span>
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
                {/* <i className="fa-solid fa-circle-check"></i> */}
                {/* <i className="fa-solid fa-circle-exclamation"></i> */}
                <span className="formerror"></span>
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
                {/* <i className="fa-solid fa-circle-check"></i> */}
                {/* <i className="fa-solid fa-circle-exclamation"></i> */}
                <span className="formerror"></span>
              </div>
            </div>
            <div className="ssubmit">
              <Link to="/profile" onClick={editUserDetails} className="ssubmit">
                <input type="submit" value="Submit" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
