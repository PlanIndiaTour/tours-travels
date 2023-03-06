import React from "react";

import "./home.css";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Destination from "../../components/destination/Destination";
import Webservice from "../../components/webservice/Webservice";
import Homeplaces from "../../components/homeplaces/Homeplaces";
import Homedestinations from "../../components/homedestinations/Homedestinations";
import Hometours from "../../components/hometour/Hometours";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Homedestinations />
      <Homeplaces />
      <Hometours />
      <Destination place="Thane" />
      <Webservice />
      {/* <div className="empty"></div> */}
      <Footer />
    </>
  );
};

export default Home;
