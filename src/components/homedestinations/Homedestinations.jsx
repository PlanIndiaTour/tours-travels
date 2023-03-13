import React from "react";

import { Link } from "react-router-dom";

import "./homedestinations.css";

const Homedestinations = () => {
  return (
    <>
      <div className="homedestination">
        <div className="topdestinations">TOP DESTINATIONS</div>
        <div className="topdestinationcontainer">
          <Link to="/" className="topdestinationitem1">
            <div className="topdestinationitemtext">VIZAG</div>
          </Link>
          <Link to="/" className="topdestinationitem2">
            <div className="topdestinationitemtext">JAIPUR</div>
          </Link>
          <Link to="/" className="topdestinationitem3">
            <div className="topdestinationitemtext">LEH</div>
          </Link>
          <Link to="/" className="topdestinationitem4">
            <div className="topdestinationitemtext">VARANASI</div>
          </Link>
        </div>
        <div className="viewmoredestinations">
          <Link to="/destinationlist" className="vmdlink">
            View More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homedestinations;
