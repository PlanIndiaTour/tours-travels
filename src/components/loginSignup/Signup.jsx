import React from "react";
import { useState } from "react";
import "./signup.css";
import { signup } from "../../service/api";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const initialValues = {
  fullname: '',
  email: '',
  contact: '',
  username: '',
  password: ''

}

const Signup = ({toggleSignup}) => {
  

  const [user, setUser] = useState(initialValues);
  const {fullname, email, contact, username, password} = user;
  // const navigate = useNavigate();

  const onValueChange = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value })
    // console.log(user)
  }

  const AllUserDetails = async() => {
    // e.preventDefault();
    //-----------------------------------------------------------------kartik
    await signup(user);
    toggleSignup();
  }
  



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
              <input type="submit" value="Register"  />
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
