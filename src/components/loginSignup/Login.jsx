import React, { useState } from "react";
import "./login.css";
import { Link,useNavigate } from "react-router-dom";
import Signup from "../loginSignup/Signup";
import axios from "axios";
import Home from "../../pages/home/Home";

import { getUsers } from "../../service/api";//omkartry






const Login = (user) => {
  
  const navigate = useNavigate();

  const [signup, setSignup] = useState(false);

   const toggleSignup = () => {
    setSignup(!signup);
  };


  //---------------------------------------------------------------
  // import {  useState } from "react";
  // import { useNavigate } from 'react-router-dom';
  // import axios from "axios";
   
   
  // function Login() {
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      // const navigate = useNavigate();
   
   
      async function login(e) {
          e.preventDefault();
          try {
            await axios.post("http://localhost:8080/login", {
              email: email,
              password: password,
              }).then((res) =>
              {
               console.log(res.data);
              
               if (res.data.message == "Email not exits")
               {
                 alert("Empty Email OR Email does not exits");
               }
               else if(res.data.message == "Login Success")
               {
                alert("Login successfull");
    navigate(`/profile/${user.id}`);

                // navigate("/");
               }
              //  else if(res.data.message == "Login Success")
              //  {
              //   alert("Login successfull");
              //   // navigate("/");
              //  }
                else
               {
                  alert("Incorrect Email and Password not match");
               }
            }, fail => {
             console.error(fail); // Error!
    });
          }
   
           catch (err) {
            alert(err);
          }
        }

        //---------------------------------------------------------------
  return (
    <>
      <div className="loginContainer">
        <div className="loginHeading">
          <h1>Login To PlanIT</h1>
        </div>
        <div className="loginContent">
          <form
            // onSubmit={login}
            action="#"
            name="loginform"
            className="loginform"
            id="loginform"
            // method="POST"
          >
            <div className="userinput">
              <label htmlFor="username">Email</label>
              <input
              onChange={(e) =>{setEmail(e.target.value);}}
                type="text"
                id="user"
                name="user"
                placeholder="Email"
                required
                value={email}
              />
            </div>
            <div className="userinput">
              <label for="password">Password</label>
              <input
               onChange={(e) =>{setPassword(e.target.value);}}
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required
                value={password}
              />
            </div>
            <div className="lsubmit">
              {/* <input type="submit" value="Log in" /> */}
              <Link to="/" onClick={login} className="ssubmit">
                <input type="submit" value="Log in" />
              </Link>

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
              <Link
                to="/"
                className="su"
                // onClick={toggleSignup()}
                // onChange={toggleLogin()}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
