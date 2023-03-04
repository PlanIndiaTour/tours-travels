import React from "react";

import "./home.css";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
// import Destination from "../../components/destination/Destination";
// import Place from "../../components/place/Place";
// import Webservice from "../../components/webservice/Webservice";

// import Login from "../../components/loginSignup/Login";
// import Signup from "../../components/loginSignup/Signup";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      {/* <Destination />
      <Place />
      <Webservice /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <div className="empty"></div>
      <Footer />
    </>
  );
};

export default Home;
