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
    <>
      <Navbar />
      <div className="homecontainer">
        <section>
          <Header />
        </section>
        <section>
          <Homedestinations />
        </section>
        <section>
          <Homeplaces />
        </section>
        <section>
          <Hometours />
        </section>
        <section>
          <Homereview />
        </section>
        <section>
          <Webservice />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
