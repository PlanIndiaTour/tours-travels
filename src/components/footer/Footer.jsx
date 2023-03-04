import React from "react";
import "./footer.css";
import img from "../../assets/PlanIT_logo.png";
import { Link } from "react-router-dom";

// import { Library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
// import { faBorderAll } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <section className="footerSubscription">
          <p className="footerSubHeading">
            Are you looking for a new environment? Would you like to explore new
            context in life?
          </p>
          <div className="inputArea">
            <form action="subscribe">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="footerInput"
              />
              <button className="footerBtn">Subscribe</button>
            </form>
          </div>
        </section>

        <div className="footerLinks">
          <div className="footerLinkWrapper">
            <div className="footerLinkItems">
              <h2>Usefull Links</h2>
              <Link to="/">About Us</Link>
              <Link to="/">Reviews</Link>
              <Link to="/">Help</Link>
              <Link to="/">Support</Link>
            </div>
          </div>
          <div className="footerLinkWrapper">
            <div className="footerLinkItems">
              <h2>Contact Us</h2>
              <Link to="/">+919527872032</Link>
              <Link to="/">planindiatour.planit@gmail.com</Link>
              <Link to="/">Katraj-Kondhwa Bk, Pune 411048</Link>
              <Link to="/">Maharashtra, India</Link>
            </div>
          </div>
          <div className="footerLinkWrapper">
            <div class="gmap_canvas">
              <iframe
                title="map"
                width="320"
                height="200"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=shatrunjay%20road,kondhwa%20bk&t=k&z=9&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          <section className="socialMedia">
            <div className="socialMediaWrap">
              <div className="socialIcons">
                <Link
                  to="/"
                  class="socialIconLink facebook"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link
                  to="https://instagram.com/plan_india_tour?igshid=YmMyMTA2M2Y="
                  class="socialIconLink instagram"
                  target="_blank"
                  aria-label="instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  to="https://www.pinterest.com/pindiatour/"
                  class="socialIconLink pinterest"
                  target="_blank"
                  aria-label="pinterest"
                >
                  <FontAwesomeIcon icon={faPinterest} />
                </Link>
                <Link
                  to="https://www.youtube.com/channel/UCiD-UCnfS1obZEUUh9G6I-w"
                  class="socialIconLink youtube"
                  target="_blank"
                  aria-label="youtube"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
                <Link
                  to="https://www.youtube.com/channel/UCiD-UCnfS1obZEUUh9G6I-w"
                  class="socialIconLink youtube"
                  target="_blank"
                  aria-label="youtube"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
              <div className="footerLogo">
                <Link to="/" className="socialLogo">
                  <img src={img} alt="PlanIT_logo" id="footerlogo" />
                </Link>
              </div>
              <small className="websiteRights">by Team SOAR © 2023</small>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;
