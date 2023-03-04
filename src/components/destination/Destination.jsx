import React from "react";

import "./destination.css";

import punecity_JMRoad from "../../assets/punecity_JMRoad.jpg";
import munnar from "../../assets/munnar.jpg";
import jaipurcity from "../../assets/jaipurcity.jpg";
import shillong from "../../assets/shillong.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const destination = (props) => {
  return (
    <>
      <div className="destinationBody">
        <h2>Top Destinations</h2>
        <div className="destinationContainer">
          <div className="destinationItem">
            <Link to="/pune">
              <div className="destinationImage">
                <img
                  src={punecity_JMRoad}
                  alt="PlanIT_logo"
                  className="dImage"
                />
              </div>
              <div className="destinationTitle">{props.pune}</div>
            </Link>
          </div>
          <div className="destinationItem">
            <Link to="/munnar">
              <div className="destinationImage">
                <img src={munnar} alt="PlanIT_logo" className="dImage" />
              </div>
              <div className="destinationTitle">Munnar</div>
            </Link>
          </div>
          <div className="destinationItem">
            <Link to="/jaipur">
              <div className="destinationImage">
                <img src={jaipurcity} alt="PlanIT_logo" className="dImage" />
              </div>
              <div className="destinationTitle">Jaipur</div>
            </Link>
          </div>
          <div className="destinationItem">
            <Link to="/shillong">
              <div className="destinationImage">
                <img src={shillong} alt="PlanIT_logo" className="dImage" />
              </div>
              <div className="destinationTitle">Shillong</div>
            </Link>
          </div>
        </div>
        <div className="destinationViewMore">
          <Link to="/destinationlist">
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </Link>
        </div>
      </div>
    </>
  );
};

destination.prototype = {
  pune: PropTypes.string.isRequired,
};

destination.defaultProps = {
  pune: "Pune",
};

export default destination;
