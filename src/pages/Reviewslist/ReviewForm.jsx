import React from "react";
import { useState } from "react";
import { addReview } from "../../service/api";
import "./reviewForm.css";


const initialValues = {
  name: "",
  date: "",
  reviewtext: ""
};

const ReviewForm = () => {
  const [review, setReview] = useState(initialValues);
  const { name, date, reviewtext} = review;

  const onValueChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
    // console.log(user)
  };

  const AllReviewDetails = async (e) => {
    e.preventDefault();
    //---------------------------------------------kartik
    await addReview(review);
    window.location.reload(false);
  };

  return (
    <>
      <div className="form-main">
        <div className="form-div">
          <form onSubmit={AllReviewDetails} className="addDataform" id="form1">
            <p className="text">
              <input
                onChange={(e) => onValueChange(e)}
                value={name}
                name="name"
                type="text"
                // className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="Enter Name"
                id="name"
              />
            </p>

            <p className="text">
              <input
                onChange={(e) => onValueChange(e)}
                value={date}
                name="date"
                type="text"
                // className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="Enter Date"
                id="name"
              />
            </p>

            <p className="text">
              <textarea
                onChange={(e) => onValueChange(e)}
                value={reviewtext}
                name="reviewtext"
                // className="validate[required,length[6,300]] feedback-input"
                id="comment"
                placeholder="Enter Your Review Here."
              ></textarea>
            </p>

            <div className="submit">
              <input type="submit" value="ADD REVIEW" id="button-blue" />
              <div className="ease"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
