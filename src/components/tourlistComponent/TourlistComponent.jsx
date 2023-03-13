import React from "react";
import { Link } from "react-router-dom";

import "./tourlistcomponent.css";


const TourlistComponent = ({tour}) => {
  return (
    <>
      <div className="TourlistComponent">
        <div className="tourlistimg">img</div>
        <div className="tourlistdisc">
          <div className="tourlisttitle">{tour.title}</div>
          <div className="tourlistdescription">{tour.description}</div>
        </div>
        <div className="tourlistbook">
          <div className="tourlistprice">{tour.price}</div>
          <div className="tourlistdays">{tour.days}</div>
          <Link to="/tourlist" className="tourlistviewmore">
            ViewMore
          </Link>
        </div>
      </div>
    </>
  );
};

export default TourlistComponent;
