import React from "react";

import {useState, useEffect} from "react";
import { getUsers } from "../../service/api";
import "./profile.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import bpp from "./../../assets/munnar.jpg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Profile = () => {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUserDetails( );
    }, [])

    const getUserDetails = async () =>{
        let response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }

  return (
    <>
      <Navbar />
      {users.map((user) => (
      <div className="profilepage"key={user.id}>
        <div className="profileimage">
          <img src={bpp} alt="profile_picture" className="profileimage"></img>
        </div>
        <div className="profiledetails">
          <div className="profilename">{user.fullname}</div>
          <div className="profilecontactdetails">
            <div className="profilecontact">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="pcmail">{user.email}</div>
            </div>
            <div className="profilecontact">
              <FontAwesomeIcon icon={faPhone} />
              <div className="pcphone">{user.contact}</div>
            </div>
          </div>
          <div className="editprofilec">
            <Link to={`/editprofile/${user.id}`} className="editprofile">
              Edit Profile
            </Link>

            <Link to={`/`} className="editprofile">
              Logout
            </Link>
            {/* ))} */}
          </div>
        </div>
        <div className="otherprofiledetails">
          <div className="myBookings">
            <div className="myBHeading">MY BOOKINGS :</div>
          </div>
        </div>
      </div>))}
      <Footer />
    </>
  );
};

export default Profile;
