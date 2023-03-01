import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar1.css";
import img from "../../otherdata/PlanIT_logo.png";

const Navbar1 = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const viewButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    viewButton();
  });

  window.addEventListener("resize", viewButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={img} alt="PlanIT_logo" id="logo" />
          </Link>
          <div className="menu-icon">
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
