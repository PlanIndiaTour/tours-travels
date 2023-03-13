import React from "react";

import "./webservice.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faHotel,
  faMountainSun,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

const webservice = () => {
  return (
    <>
      <section class="container">
        <div class="text">
          <h2>We have the best services available for you!</h2>
        </div>
        <div class="rowitems">
          <div class="container-box">
            <div class="container-image">
              {/* <img src="./files/1a.jpg" alt="Flight Services"> */}
              <FontAwesomeIcon icon={faMountainSun} size="5x" />
            </div>
            <h4>Best Value</h4>
            <p>Value for money itineraries</p>
          </div>

          <div class="container-box">
            <div class="container-image">
              {/* <img src="./files/2a.jpg" alt="Food Services"> */}
              <FontAwesomeIcon icon={faBowlFood} size="5x" />
            </div>
            <h4>All Meals</h4>
            <p>Eat to your heart's content Breakfast. Lunch. Dinner.</p>
          </div>

          <div class="container-box">
            <div class="container-image">
              {/* <img src="./files/3a.jpg" alt="Travel Services"> */}
              <FontAwesomeIcon icon={faPlaneDeparture} size="5x" />
            </div>
            <h4>Travel Services</h4>
            <p>include all rail and road transport as part of itinerary</p>
          </div>

          <div class="container-box">
            <div class="container-image">
              {/* <img src="./files/4a.jpg" alt="Hotel Services"> */}
              <FontAwesomeIcon icon={faHotel} size="5x" />
            </div>
            <h4>Accommodation</h4>
            <p>Comfortable & Convenient hotels</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default webservice;
