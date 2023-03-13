import React from "react";
import { useState } from "react";
import { addTour } from "../../../service/api";
import "./cssDestination.css";

const initialValues = {
    title:'',
    description: '',
    itinerary: '',
    price: '',
    days: ''
  }

  const AddTour = ({toggleAddDestination}) => {

    const [tour, setTour] = useState(initialValues);
    const {title, description,itinerary,price,days} = tour;
    
    const onValueChange = (e) => {

        setTour({ ...tour, [e.target.name]: e.target.value })
        // console.log(user)
      }
    
      const AllTourDetails = async(e) => {
        e.preventDefault();
        await addTour(tour);
        toggleAddDestination();
      }

    return (
        <>
        
<div id="form-main">
  <div id="form-div">
    <form
    onSubmit={AllTourDetails}
    className="form"
    id="form1">
      
      <p className="name">
        <input
        onChange={(e) => onValueChange(e)}
        value={title}
        name="title"
        type="text"
        // className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
        placeholder="Title"
        id="name" />
      </p>
      
      <p className="text">
        <textarea
        onChange={(e) => onValueChange(e)}
        value={description}
        name="description"
        className="validate[required,length[10,30000]] feedback-input"
        id="comment"
        placeholder="Description"></textarea>
      </p>

      <p className="text">
        <textarea
        onChange={(e) => onValueChange(e)}
        value={itinerary}
        name="itinerary"
        className="validate[required,length[10,30000]] feedback-input"
        id="comment"
        placeholder="Itinerary"></textarea>
      </p>

      <p className="text">
        <input
        onChange={(e) => onValueChange(e)}
        value={price}
        name="price"
        type="number"
        // className="validate[required,custom[email]] feedback-input"
        id="name"
        placeholder="Price" />
      </p>
      
      <p className="text">
        <textarea
        onChange={(e) => onValueChange(e)}
        value={days}
        name="days"
        className="validate[required,length[6,300]] feedback-input"
        id="comment"
        placeholder="Days"></textarea>
      </p>

      <div className="submit">
        <input type="submit" value="SEND" id="button-blue"/>
        <div className="ease"></div>
      </div>
    </form>
  </div>
  </div>
  
      </>
    );
  };
  
  export default AddTour;