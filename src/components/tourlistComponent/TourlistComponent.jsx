import React from "react";
import { Link } from "react-router-dom";

import "./tourlistcomponent.css";

const TourlistComponent = () => {
  return (
    <>
      <div className="TourlistComponent">
        <div className="tourlistimg">img</div>
        <div className="tourlistdisc">
          <div className="tourlisttitle">Title</div>
          <div className="tourlistdescription">Description</div>
        </div>
        <div className="tourlistbook">
          <div className="tourlistprice">25000</div>
          <div className="tourlistdays">4days</div>
          <Link to="/tour" className="tourlistviewmore">
            ViewMore
          </Link>
        </div>
      </div>
    </>
  );
};

export default TourlistComponent;
