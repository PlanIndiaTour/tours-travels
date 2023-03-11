import React from "react";

import "./tour.css";

import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Tour = () => {
  return (
    <>
      <Navbar />
      <div className="TourPage">
        <div className="TourLayout">
          <div className="TourHead">
            <div className="TourImg">img</div>
            <div className="TourTitle">Title</div>
          </div>
          <div className="TourDiscription">description</div>
          <div className="TourDays">days</div>
          <div className="TourPrice">price</div>
          <Link className="TourBook">Book</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tour;
