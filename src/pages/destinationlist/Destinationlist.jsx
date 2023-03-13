import React, { useEffect, useState } from "react";
import "./destinationlist.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { getDestination } from "../../service/api";


const Destinationlist = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestinationDetails();
  }, []);

  const getDestinationDetails = async () => {
    let response = await getDestination();
    setDestinations(response.data);
  };
 

  return (
    <>
     
      <div>
        <Navbar />
        
        <div className="tourlist">
        {destinations.map((destination) => (
        <div key={destination} className="TourlistComponent">
        <div className="tourlistimg">img</div>
        <div className="tourlistdisc">
          <div className="tourlisttitle">{destination.title}</div>
          <div className="tourlistdescription">{destination.description}</div>
        </div>
        <div className="tourlistbook">
          <div className="tourlistprice">{destination.city}</div>
          <div className="tourlistdays">{destination.citydescription}</div>
          
            <Link to={`/destination/${destination.id}`} className="tourlistviewmore">
              ViewMore
            </Link>
            

        </div>
      </div>
      ))}
        </div>
        <Footer />
      </div>
    </> 
  );
};

export default Destinationlist;
