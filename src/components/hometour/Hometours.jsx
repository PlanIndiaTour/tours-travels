import React from "react";

import "./hometours.css";

import { Link } from "react-router-dom";

import Carousel from "../carousel/Carousel";
import { carouselData } from "../carousel/carouselData";

const Hometours = () => {
  return (
    <>
      <div className="hometours">
        <div className="trendingtourcontainer">
          <Carousel slides={carouselData} />
        </div>
        <div className="trendingtours">
          TRENDING TOURS
          <Link to="/tourList" className="viewMoreTours">
            View More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hometours;
