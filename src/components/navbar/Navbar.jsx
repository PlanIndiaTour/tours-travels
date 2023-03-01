import React from "react";

import "./navbar.css";

import img from "../../assets/PlanIT_logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Navbar = () => {
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
              <Link to="/tour">TOUR</Link>
            </span>
            <span>
              <Link to="/Destination">DESTINATION</Link>
            </span>
            <span>
              <Link to="/Linkboutus">ABOUT US</Link>
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
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
