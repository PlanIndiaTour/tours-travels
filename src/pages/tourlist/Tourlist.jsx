import React from "react";

import "./tourlist.css";

import TourlistComponent from "../../components/tourlistComponent/TourlistComponent";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Tourlist = () => {
  return (
    <>
      <Navbar />
      <div className="tourlist">
        <TourlistComponent />
      </div>
      <Footer />
    </>
  );
};

export default Tourlist;
