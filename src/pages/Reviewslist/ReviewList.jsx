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
        <div className="tourlistPageTitle"> Reviews From Customers</div>
        <div className="tourlist">
          {reviews.map((review) => (
            <div key={review} className="TourlistComponent">
              
              <div className="tourlistdisc">
                <div className="tourlisttitle">Name - {review.name}</div>
                <div className="tourlistdays">Date - {review.date}</div>
                <div className="tourlistdescription">{review.reviewtext}</div>
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
