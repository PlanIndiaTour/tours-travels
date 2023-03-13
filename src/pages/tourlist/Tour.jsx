import React from "react";

import "./tour.css";

import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import img from "./../../assets/tajmahal.jpg";
import { getTour } from "../../service/api";
import {useState, useEffect} from "react";
 import { useParams } from "react-router-dom";


const initialValues = {
  title:'',
  description: '',
  itinerary: '',
  price: '',
  days: ''
};

const Tour = () => {

  const [tour, setTour] = useState([initialValues]);
  const { title, description, itinerary, price, days } = tour;
  const { id } = useParams();

useEffect(() => {
  getTourData();
}, []);

const getTourData = async () => {
  let response = await getTour(id);
  setTour(response.data);
};

const Details = async () => {
  const response = await getTour(id);
};

const onValueChange = (e) => {
  console.log(e.target.value);
  setTour({ ...tour, [e.target.name]: e.target.value });
  // console.log(user)
};




// const [tours, setTours] = useState([]);
    // useEffect(() =>{
    //     getTourDetails( );
    // }, [])

    // const getTourDetails = async () =>{
    //     let response = await getTours();
    //     console.log(response);
    //     setTours(response.data);
    // }


  return (
    <>
      <div>
        <Navbar />
          
        <div className="TourPage">
        {/* {tours.map((tour) => (  */}
        <form>
          <div className="TourLayout" key={tour.id}>
            <div className="TourHead">
              <div className="TourImg">
                <img src={img} className="TourImg"></img>
              </div>
              <input className="TourTitle"
              name="title"
              value={title}
              onChange={(e) => onValueChange(e)}
              ></input>
            </div>
            <div className="TourBody">
              <div className="TourDiscription">

              <input value={tour.description}/>
                
              </div>
              <div className="itiday">ITINERARY</div>
              <div className="TourItinerary">
               
              {tour.itinerary}

              </div>
              <div className="TourDays">{tour.price}</div>
              <div className="TourPrice">{tour.days}</div>
              <Link to="book" className="TourBook">
                Book
              </Link>
            </div>
           
          </div>
          {/* ))} */}
          </form> 
        </div>
         
        <Footer />
      </div>
    </>
  );
};

export default Tour;
