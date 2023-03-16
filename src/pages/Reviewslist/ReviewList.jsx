import React, { useEffect, useState } from "react";
import "./reviewList.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { getReviews } from "../../service/api";
import ReviewForm from "./ReviewForm";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewDetails();
  }, []);

  const getReviewDetails = async () => {
    let response = await getReviews();
    setReviews(response.data);
  };

  return (
    <>
      <div>
        <Navbar />
        <ReviewForm />
        <div className="ReviewlistPageTitle"> Reviews From Customers</div>
        <div className="Reviewlist">
          {reviews.map((review) => (
            <div key={review} className="ReviewlistComponent">
              
              <div className="Reviewlistdisc">
                <div className="Reviewlisttitle">{review.name}</div>
                <div className="Reviewlistdays">{review.date}</div>
                <div className="Reviewlistdescription">{review.reviewtext}</div>
              </div>
              </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ReviewList;
