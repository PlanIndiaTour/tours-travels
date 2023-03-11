import React from "react";

// import { useState, useEffect } from "react";
// import { getUsers } from "../../service/api";
import "./profile.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import bpp from "../../assets/blank-profile-picture.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profilepage">
        <div className="profileimage">
          <img src={bpp} alt="profile_picture" className="profileimage"></img>
        </div>
        <div className="profiledetails">
          <div className="profilename">OMKAR MALI</div>
          <div className="profilecontactdetails">
            <div className="profilecontact">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="pcmail">omkarmali@gmail.com</div>
            </div>
            <div className="profilecontact">
              <FontAwesomeIcon icon={faPhone} />
              <div className="pcphone">9689467225</div>
            </div>
          </div>
          <div className="editprofile">
            <Link to="/" className="editprofile">
              Edit Profile
            </Link>
          </div>
        </div>
        <div className="otherprofiledetails">
          <div className="myBookings">
            <div className="myBHeading">MY BOOKINGS :</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
