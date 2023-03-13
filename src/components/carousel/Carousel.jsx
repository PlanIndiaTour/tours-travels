import { useState, useEffect } from "react";
import { carouselData } from "./carouselData";

import "./carousel.css";
import yellow from "./../../assets/paintbrush.png";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Carousel = (slides) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        nextSlide();
      }, 2500);
  });

  const length = 5;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? current - 4 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <div
        className="carousel"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <div className="carouselWrapper">
          {carouselData.map((singleslide, index) => {
            return (
              <div
                className={
                  index === current ? "singleslide_active" : "singleslide"
                }
                key={index}
              >
                {index === current && (
                  <>
                    <img
                      src={yellow}
                      alt="text_background"
                      className="textBG"
                      onClick={prevSlide}
                    />
                    <div className="tttext" onClick={prevSlide}>
                      <div className="ttname" onClick={prevSlide}>
                        {singleslide.name}
                      </div>
                      <p className="discription" onClick={prevSlide}>
                        {singleslide.discription}
                      </p>
                      <Link to="/tour" className="seeDetails">
                        see details
                      </Link>
                    </div>
                    <img
                      src={singleslide.image}
                      alt="tour_image"
                      className="tourImage"
                      onClick={nextSlide}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
        {/* <div className="leftArrow" onClick={prevSlide}>
          <FontAwesomeIcon icon={faAngleLeft} className="leftArrow" />
        </div>
        <div className="rightArrow" onClick={nextSlide}>
          <FontAwesomeIcon icon={faAngleRight} className="rightArrow" />
        </div> */}
      </div>
    </>
  );
};

export default Carousel;
