import React from "react";

import "./homereview.css";

import { Link } from "react-router-dom";

import photo from "./../../assets/papernote.png";

const homereview = () => {
  return (
    <>
      <div className="homereview">
        <div className="recentreview">
          RECENT REVIEWS
          <Link to="/reviewList" className="viewMoreReview">
            View More
          </Link>
        </div>
        <div className="recentreviewcontainer">
          <div className="rrc1">
            <div className="rreview1">
              <img src={photo} alt="reviewBG" className="rreviewBG" />
              <div className="rreviewtext">
                <div className="cname">Manasi</div>
                <div className="rdate">05 March 2023</div>
                <Link to="/maharashtrafort" className="tname">
                  Maharashtra Forts Tour
                </Link>
                <p className="rreviewshort">
                  <span className="dc">&ldquo;</span> Very good experience. I
                  Will recommend to my friends. Tour managers were courteous and
                  helpful. Thanks PlanIT <span className="dc">&rdquo;</span>
                </p>
                <div className="star">&#9733;&#9733;&#9733;</div>
              </div>
            </div>
            <div className="rreview2">
              <img src={photo} alt="reviewBG" className="rreviewBG" />
              <div className="rreviewtext">
                <div className="cname">Kartik</div>
                <div className="rdate">11 March 2023</div>
                <Link to="/maharashtrafort" className="tname">
                  South India Temple Tour
                </Link>
                <p className="rreviewshort">
                  <span className="dc">&ldquo;</span> We had wonderful time.Trip
                  was very well arranged.Looking forward to the next trip. Thank
                  you! <span className="dc">&rdquo;</span>
                </p>
                <div className="star">&#9733;&#9733;&#9733;&#9733;</div>
              </div>
            </div>
          </div>
          <div className="rrc2">
            <div className="rreview3">
              <img src={photo} alt="reviewBG" className="rreviewBG" />
              <div className="rreviewtext">
                <div className="cname">Ankit</div>
                <div className="rdate">27 Feb 2023</div>
                <Link to="/maharashtrafort" className="tname">
                  Rajasthan Desert Tour
                </Link>
                <p className="rreviewshort">
                  <span className="dc">&ldquo;</span> It was a wonderful
                  experience and would surely recommend to use the services to
                  others . Thanks for your hospitality.
                  <span className="dc">&rdquo;</span>
                </p>
                <div className="star">&#9733;&#9733;&#9733;&#9733;</div>
              </div>
            </div>
            <div className="rreview4">
              <img src={photo} alt="reviewBG" className="rreviewBG" />
              <div className="rreviewtext">
                <div className="cname">Nitin</div>
                <div className="rdate">07 March 2023</div>
                <Link to="/maharashtrafort" className="tname">
                  Wildlife Safari Tour
                </Link>
                <p className="rreviewshort">
                  <span className="dc">&ldquo;</span> Everything happened as per
                  itinerary. Tour managers put in lots of efforts to ensure that
                  each one could do sight seeing comfortably. Well organized.{" "}
                  <span className="dc">&rdquo;</span>
                </p>
                <div className="star">&#9733;&#9733;&#9733;&#9733;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default homereview;
