import React from "react";

import "./home.css";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Webservice from "../../components/webservice/Webservice";
import Homeplaces from "../../components/homeplaces/Homeplaces";
import Homedestinations from "../../components/homedestinations/Homedestinations";
import Hometours from "../../components/hometour/Hometours";
import Homereview from "../../components/homereview/Homereview";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Homedestinations />
      <Homeplaces />
      <Hometours />
      <Homereview />
      <Webservice />
      {/* <div className="empty"></div> */}
      <Footer />
    </div>
  );
};

export default Home;
