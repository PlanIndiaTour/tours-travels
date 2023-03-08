<<<<<<< HEAD
import React from "react";

=======
import {useState, useEffect} from "react";
import { getUsers } from "../../service/api";
>>>>>>> 27be0452191814610767ecd3f2763c706786d759
import "./profile.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
<<<<<<< HEAD

import bpp from "../../assets/blank-profile-picture.webp";

=======
import bpp from "./../../assets/munnar.jpg"; 
>>>>>>> 27be0452191814610767ecd3f2763c706786d759
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Profile = () => {
<<<<<<< HEAD
=======
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUserDetails( );
    }, [])

    const getUserDetails = async () =>{
        let response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }

>>>>>>> 27be0452191814610767ecd3f2763c706786d759
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
<<<<<<< HEAD
            <Link to="/" className="editprofile">
              Edit Profile
            </Link>
=======

            {users.map(user => (
            <Link to={`/editprofile/${user.id}`} className="editprofile">
              Edit Profile
            </Link>
            ))
}
>>>>>>> 27be0452191814610767ecd3f2763c706786d759
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

<<<<<<< HEAD
export default Profile;
=======
export default Profile;
>>>>>>> 27be0452191814610767ecd3f2763c706786d759
