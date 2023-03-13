import React from "react";

import "./home.css";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

import Webservice from "../../components/webservice/Webservice";
import Homeplaces from "../../components/homeplaces/Homeplaces";
import Homedestinations from "../../components/homedestinations/Homedestinations";
import Hometours from "../../components/hometour/Hometours";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homecontainer">
      
      <section className="scroll1"><Header /></section>
      
      <section className="scroll2"><Homedestinations /></section>
      <section className="scroll3"><Homeplaces /></section>
      <section className="scroll4"><Hometours /></section>
      <section className="scroll5"><Webservice /></section>
      <section className="scroll6"><Footer /></section>
      </div>
    </div>
  );
};

export default Home;
