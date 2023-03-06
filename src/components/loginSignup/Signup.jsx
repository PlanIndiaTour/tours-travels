import React from "react";
import { useState } from "react";
import "./signup.css";
import { signup } from "../../service/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const initialValues ={
  fullname: '',
  email: '',
  contact: '',
  username: '',
  password: ''

}

const Signup = () => {

  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user)
  }

  const AllUserDetails = async () =>{
    await signup(user);
    navigate('/');
  }

  return (
    <>
      <div className="signupContainer">
        <div className="signupHeading">
          <h1>Signup For PlanIT</h1>
        </div>
        <div className="signupContent">
          <form
            action="/"
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
                  placeholder="Create Password"
                  required
                />
                {/* <i className="fa-solid fa-circle-check"></i> */}
                {/* <i className="fa-solid fa-circle-exclamation"></i> */}
                <span className="formerror"></span>
              </div>
            </div>
            <div className="ssubmit">
              <input onClick={() => AllUserDetails()} type="submit" value="Register" component={Link} to="/"/>
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
