import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addDestination } from "../../../service/api";
import "./cssDestination.css";

const initialValues = {
  title: "",
  description: "",
  city: "",
  citydescription: "",
};

const AddDestination = ({ toggleAddDestination }) => {
  const [desti, setDesti] = useState(initialValues);
  const { title, description, city, citydescription } = desti;

  const onValueChange = (e) => {
    setDesti({ ...desti, [e.target.name]: e.target.value });
    // console.log(user)
  };

  const AllDestiDetails = async (e) => {
    e.preventDefault();
    //---------------------------------------------kartik
    await addDestination(desti);
    toggleAddDestination();
  };

  return (
    <>
      <div className="form-main">
        <div className="form-div">
          <form onSubmit={AllDestiDetails} className="addDataform" id="form1">
            <p className="text">
              <input
                onChange={(e) => onValueChange(e)}
                value={title}
                name="title"
                type="text"
                // className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="Title"
                id="name"
              />
            </p>

            <p className="text">
              <textarea
                onChange={(e) => onValueChange(e)}
                value={description}
                name="description"
                // className="validate[required,length[6,300]] feedback-input"
                id="comment"
                placeholder="Description"
              ></textarea>
            </p>

            <p className="text">
              <input
                onChange={(e) => onValueChange(e)}
                value={city}
                name="city"
                type="text"
                // className="validate[required,custom[email]] feedback-input"
                id="city"
                placeholder="City"
              />
            </p>

            <p className="text">
              <textarea
                onChange={(e) => onValueChange(e)}
                value={citydescription}
                name="citydescription"
                className="validate[required,length[6,300]] feedback-input"
                id="comment"
                placeholder="City Description"
              ></textarea>
            </p>

            <div className="submit">
              <input type="submit" value="ADD DATA" id="button-blue" />
              <div className="ease"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDestination;
