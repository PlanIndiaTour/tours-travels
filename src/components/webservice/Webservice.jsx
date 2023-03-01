import React from "react";

import "./webservice.css";

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
            </div>
            <h4>Flight Services</h4>
            <p>Arrival and Departure</p>
          </div>

          <div class="container-box">
            <div class="container-image">
              {/* <img src="./files/2a.jpg" alt="Food Services"> */}
            </div>
            <h4>Food Services</h4>
            <p>Catering</p>
          </div>

          <div class="container-box">
            <div class="container-image">
              {/* <img src="./files/3a.jpg" alt="Travel Services"> */}
            </div>
            <h4>Travel Services</h4>
            <p>Pick-up/drop</p>
          </div>

          <div class="container-box">
            <div class="container-image">
              {/* <img src="./files/4a.jpg" alt="Hotel Services"> */}
            </div>
            <h4>Hotel Services</h4>
            <p>Check-in/out</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default webservice;
