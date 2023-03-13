import React, { useState } from "react";

import "./navbar.css";

import img from "../../assets/PlanIT_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Login from "../loginSignup/Login";
import Signup from "../loginSignup/Signup";

const Navbar = () => {
  const [login, setLogin] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  };

  const [signup, setSignup] = useState(false);

  const toggleSignup = () => {
    setSignup(!signup);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navContainer">
          <div className="navLogo">
            <Link to="/">
              <img src={img} alt="PlanIT_logo" id="logo" />
            </Link>
          </div>

          <div className="navItems">
            <span>
              <Link to="/tourlist">TOUR</Link>
            </span>
            <span>
              <Link to="/destinationlist">DESTINATION</Link>
            </span>
            <span>
              <Link to="/Dashboard">ADMIN</Link>
            </span>
            <span>
              <Link to="/Aboutus">ABOUT US</Link>
            </span>
          </div>

          <div className="Profile">
            <span>
              <div className="navProfile">
                <Link to="/profile">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </div>
              <div class="dropdownProfile">
                <button onClick={toggleLogin}>Log In</button>
                <button onClick={toggleSignup}>Sign Up</button>
              </div>
            </span>
          </div>
        </div>
      </nav>

      {login && (
        <div className="login">
          <div className="overlay" onClick={toggleLogin}></div>
          <Login toggleLogin={toggleLogin}/>
        </div>
      )}
      {signup && (
        <div className="signin">
          <div className="overlay" onClick={toggleSignup}></div>
          <Signup toggleSignup={toggleSignup} />
        </div>
      )}
    </>
  );
};

export default Navbar;
