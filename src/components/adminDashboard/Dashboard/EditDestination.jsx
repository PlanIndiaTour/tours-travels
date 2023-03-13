import React from "react";

import "./editDestination.css";


import AdNavbar from "../AdNavbar/AdNavbar";
import { Link } from "react-router-dom";
// import img from "./../../assets/tajmahal.jpg";
import { editDestination, getDestination } from "../../../service/api";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const initialValues = {
  title:'',
  description: '',
  city: '', 
  citydescription: ''
};

const EditDestination = () => {

  const [desti, setDesti] = useState(initialValues);
  const { title, description, city, citydescription} = desti;
  const { id } = useParams();

useEffect(() => {
  getDestinationData();
}, []);

const getDestinationData = async () => {
  let response = await getDestination(id);
  setDesti(response.data);
};

const editDestinationDetails = async () => {
    const response = await editDestination(id, desti);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setDesti({ ...desti, [e.target.name]: e.target.value });
    // console.log(user)
  };
  


  return (
    <>
      <div>
        <AdNavbar />
        <div className="form-main">
        <div className="form-div">
        <h1>Edit Destination</h1>
          <form onSubmit={editDestinationDetails} className="addDataform" id="form1">
            <p className="text">
              <input
                onChange={(e) => onValueChange(e)}
                name="title"
                value={title}
                type="text"
                // className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="Title"
                id="name"
              />
            </p>

            <p className="text">
              <textarea
                onChange={(e) => onValueChange(e)}
                name="description"
                value={description}
                
                // className="validate[required,length[6,300]] feedback-input"
                id="comment"
                placeholder="Description"
              ></textarea>
            </p>

            <p className="text">
              <input
                onChange={(e) => onValueChange(e)}
                name="city"
                value={city}
                type="text"
                // className="validate[required,custom[email]] feedback-input"
                id="city"
                placeholder="City"
              />
            </p>

            <p className="text">
              <textarea
                onChange={(e) => onValueChange(e)}
                name="citydescription"
                value={citydescription}
                
                className="validate[required,length[6,300]] feedback-input"
                id="comment"
                placeholder="City Description"
              ></textarea>
            </p>

            <div className="submit">
            <Link to="/allDestinations" onClick={editDestinationDetails} className="ssubmit">
              <input type="submit" value="EDIT DATA" id="button-blue" />
              </Link>
              <div className="ease"></div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default EditDestination;
