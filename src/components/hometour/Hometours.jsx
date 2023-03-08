import React from "react";

import "./hometours.css";

import { Link } from "react-router-dom";

import ImageSlider from "./ImageSlider";

const Hometours = () => {
  const slides = [
    { url: "http://localhost:3000/image.jpg", title: "goldentriangle" },
    { url: "http://localhost:3000/image.jpg", title: "goldentriangle" },
    { url: "http://localhost:3000/image.jpg", title: "goldentriangle" },
    { url: "http://localhost:3000/image.jpg", title: "goldentriangle" },
    { url: "http://localhost:3000/image.jpg", title: "goldentriangle" },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <>
      <div className="hometours">
        <div className="treandingtourcontainer">
          <div className="treandingtourSlider" style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
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
