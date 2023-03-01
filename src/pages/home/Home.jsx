import React from "react";

import "./home.css";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Destination from "../../components/destination/Destination";
import Place from "../../components/place/Place";
import Tour from "../../components/tour/Tour";
import Webservice from "../../components/webservice/Webservice";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Destination />
      <Place />
      {/* <Tour /> */}
      {/* <Review /> */}
      <Webservice />
      <Footer />
    </div>
  );
};

export default Home;
