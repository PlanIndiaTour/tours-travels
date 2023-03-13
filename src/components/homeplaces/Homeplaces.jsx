import React from "react";

import "./homeplaces.css";

import { Link } from "react-router-dom";

const Homeplaces = () => {
  return (
    <>
      <div class="homeplaces">
        <div className="popularPlaces">
          POPULAR PLACES
          <Link to="/destinationlist" className="viewMorePlaces">
            View More
          </Link>
        </div>
        <div class="slider">
          <Link to="/" class="slide s1">
            AMER FORT
            {/* <div className="slideText">AMER FORT</div> */}
          </Link>
          <Link to="/" class="slide s2">
            GOLDEN TEMPLE
            {/* <div className="slideText">GOLDEN TEMPLE</div> */}
          </Link>
          {/* <Link to="/pune" class="slide s3">
            <div className="slideText">TAJ MAHAL</div>
          </Link> */}
          <Link to="/" class="slide s3">
            MYSORE PALACE
            {/* <div className="slideText">MYSORE PALACE</div> */}
          </Link>
          <Link to="/" class="slide s4">
            BUDDHA PARK
            {/* <div className="slideText">BUDDHA PARK</div> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homeplaces;
