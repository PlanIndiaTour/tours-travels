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




// const [Destis, setDestis] = useState([]);
    // useEffect(() =>{
    //     getDestiDetails( );
    // }, [])

    // const getDestiDetails = async () =>{
    //     let response = await getDestis();
    //     console.log(response);
    //     setDestis(response.data);
    // }


  return (
    <>
      <div>
        <Navbar />
          
        <div className="DestiPage">
            <div className="DestiLayout" key={destination.id}>
              <div className="DestiHead">
                <div className="DestiImg">
                  {/* <img src={img} className="DestiImg"></img> */}
                </div>
                <div className="DestiTitle">{destination.title}</div>
              </div>
              <div className="DestiBody">
                <div className="itiday">DESCRIPTION</div>
                <div className="DestiDiscription">{destination.description}</div>
                <div className="itiday">CITY</div>
                <div className="DestiItinerary">{destination.city}</div>
                <div className="itiday">CITY DESCRIPTION</div>
                <div className="DestiDays">{destination.citydescription}</div>

                <Link to="/tourlist" className="DestiBook">
                  View Tour
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
