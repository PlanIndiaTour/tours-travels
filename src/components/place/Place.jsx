import React from "react";

import "./place.css";

import tajmahal from "../../assets/tajmahal.jpg";
import goldentemple from "../../assets/goldentemple.jpg";
import amerfort from "../../assets/amerfort.jpg";
import mysorepalace from "../../assets/mysorepalace.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const place = () => {
  return (
    <>
      <div className="placeBody">
        <h2>Popular places</h2>
        <div className="placeContainer">
          <div className="placeItem">
            <Link to="/tajmahal">
              <div className="placeImage">
                <img src={tajmahal} alt="PlanIT_logo" className="pImage" />
              </div>
              <div className="placeTitle">Taj Mahal</div>
            </Link>
          </div>
          <div className="placeItem">
            <Link to="/goldentemple">
              <div className="placeImage">
                <img src={goldentemple} alt="PlanIT_logo" className="pImage" />
              </div>
              <div className="placeTitle">Golden Temple</div>
            </Link>
          </div>
          <div className="placeItem">
            <Link to="/amerfort">
              <div className="placeImage">
                <img src={amerfort} alt="PlanIT_logo" className="pImage" />
              </div>
              <div className="placeTitle">Amer Fort</div>
            </Link>
          </div>
          <div className="placeItem">
            <Link to="/mysorepalace">
              <div className="placeImage">
                <img src={mysorepalace} alt="PlanIT_logo" className="pImage" />
              </div>
              <div className="placeTitle">Mysore Palace</div>
            </Link>
          </div>
        </div>
        <div className="placeViewMore">
          <Link to="/placelist">
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default place;
