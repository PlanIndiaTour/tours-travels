import React from "react";

import "./destination.css";

import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import img from "./../../assets/tajmahal.jpg";
import { getDestination } from "../../service/api";
import {useState, useEffect} from "react";
 import { useParams } from "react-router-dom";


const initialValues = {
  title:'',
  description: '',
  city: '',
  citydescription: ''
};

const Destination = () => {

  const [destination, setDestination] = useState([initialValues]);
//   const { title, description, city, citydescription} = destination;
  const { id } = useParams();

useEffect(() => {
  getDestinationData();
}, []);

const getDestinationData = async () => {
  let response = await getDestination(id);
  setDestination(response.data);
};

const Details = async () => {
  const response = await getDestination(id);
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
            <div className="TourLayout" key={destination.id}>
              <div className="TourHead">
                <div className="TourImg">
                  <img src={img} className="TourImg"></img>
                </div>
                <div className="TourTitle">{destination.title}</div>
              </div>
              <div className="TourBody">
                <div className="itiday">DESCRIPTION</div>
                <div className="TourDiscription">{destination.description}</div>
                <div className="itiday">CITY</div>
                <div className="TourItinerary">{destination.city}</div>
                <div className="itiday">CITY DESCRIPTION</div>
                <div className="TourDays">{destination.citydescription}</div>

                <Link to="book" className="TourBook">
                  Book
                </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Destination;
