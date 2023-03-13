import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import "./aboutus.css";

import Aksh from "./../../assets/aboutus/Aksh.jpg";
import Om from "./../../assets/aboutus/Om.jpg";
import Ra from "./../../assets/aboutus/Ra.jpg";
import Shu from "./../../assets/aboutus/shu.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneUp, faSmile, faTree } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Aboutus = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="aboutuspage">
          <div className="ausSection">
            <div className="ausHeading">
              <h2>ABOUT US</h2>
            </div>
            <div className="ausBody">
              <p>
                Welcome to our Plan India Tour a tours and travels website! We
                are a team of experienced travel enthusiasts who are passionate
                about creating unforgettable travel experiences for our clients.
              </p>
              <p>
                At our company, we believe that travel is not just about seeing
                new places, it's about immersing yourself in new cultures,
                making lifelong memories, and creating meaningful connections
                with people from all over the India.
              </p>
              <p>
                Whether you are looking for a relaxing beach vacation, an
                adventurous trek through the mountains, or a cultural
                exploration of historic cities, we have a wide range of
                carefully curated travel packages to suit your needs.
              </p>
              <p>
                Our team of travel experts is dedicated to providing exceptional
                customer service and ensuring that your trip is tailored to your
                specific interests and preferences. From booking your flights
                and accommodations to arranging local transportation and
                activities, we handle all the details so you can focus on
                enjoying your trip.
              </p>
              <p>
                We are committed to responsible and sustainable tourism
                practices and work closely with local communities to ensure that
                our trips have a positive impact on both the environment and the
                people we meet along the way.
              </p>
              <p>
                Thank you for considering us for your travel needs. We look
                forward to helping you create the trip of a lifetime!
              </p>
            </div>
          </div>
          <div className="stsSection">
            <div class="stsHeading">
              <h3>We are Creating Experiences</h3>
            </div>
            <div class="stsrowitems">
              <div class="stscontainer-box">
                <div class="stscontainer-image">
                  <FontAwesomeIcon icon={faSmile} size="3x" />
                </div>
                <h4>Happy Family's</h4>
                <p>6,13,353+</p>
              </div>

              <div class="stscontainer-box">
                <div class="stscontainer-image">
                  <FontAwesomeIcon icon={faPlaneUp} size="3x" />
                </div>
                <h4>Tours Completed</h4>
                <p>44,247</p>
              </div>

              <div class="stscontainer-box">
                <div class="stscontainer-image">
                  <FontAwesomeIcon icon={faCompass} size="3x" />
                </div>
                <h4>Tours Available</h4>
                <p>247+</p>
              </div>

              <div class="stscontainer-box">
                <div class="stscontainer-image">
                  <FontAwesomeIcon icon={faTree} size="3x" />
                </div>
                <h4>Tour Destinations</h4>
                <p>2500+</p>
              </div>
            </div>
          </div>
          <div className="ourSection">
            <div className="ourHeading">
              <h2>MEET OUR TEAM</h2>
            </div>

            <section class="ourcontainer">
              <div class="ourrowitems">
                <div class="ourcontainer-box">
                  <div class="ourcontainer-image">
                    <img src={Shu} alt="Flight Services" />
                  </div>
                  <h4>Shubham Abnave</h4>
                  <p>PRN - 220920520005</p>
                  <div className="ourcontainer-hidden">
                    <p1>FullStack Developer</p1>
                    <div className="ourcontainer-socialicon">
                      <FontAwesomeIcon icon={faLinkedin} />
                      <FontAwesomeIcon icon={faGoogle} />
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                  </div>
                </div>

                <div class="ourcontainer-box">
                  <div class="ourcontainer-image">
                    <img src={Aksh} alt="Flight Services" />
                  </div>
                  <h4>Akshay Chirme</h4>
                  <p>PRN - 220920520017</p>
                  <div className="ourcontainer-hidden">
                    <p1>FullStack Developer</p1>
                    <div className="ourcontainer-socialicon">
                      <FontAwesomeIcon icon={faLinkedin} />
                      <FontAwesomeIcon icon={faGoogle} />
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                  </div>
                </div>

                <div class="ourcontainer-box">
                  <div class="ourcontainer-image">
                    <img src={Om} alt="Flight Services" />
                  </div>
                  <h4>Omkar Mali</h4>
                  <p>PRN - 220920520086</p>
                  <div className="ourcontainer-hidden">
                    <p1>FullStack Developer</p1>
                    <div className="ourcontainer-socialicon">
                      <FontAwesomeIcon icon={faLinkedin} />
                      <FontAwesomeIcon icon={faGoogle} />
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                  </div>
                </div>

                <div class="ourcontainer-box">
                  <div class="ourcontainer-image">
                    <img src={Ra} alt="Flight Services" />
                  </div>
                  <h4>Radhika Kolap</h4>
                  <p>PRN - 220920520104</p>
                  <div className="ourcontainer-hidden">
                    <p1>FullStack Developer</p1>
                    <div className="ourcontainer-socialicon">
                      <FontAwesomeIcon icon={faLinkedin} />
                      <FontAwesomeIcon icon={faGoogle} />
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Aboutus;
