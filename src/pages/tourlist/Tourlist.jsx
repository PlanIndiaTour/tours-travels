import React, { useEffect, useState } from "react";
import "./tourlist.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { getTours } from "../../service/api";

const Tourlist = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    getTourDetails();
  }, []);

  const getTourDetails = async () => {
    let response = await getTours();
    setTours(response.data);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="tourlistPageTitle"> Choose Your Dream Tour Package</div>
        <div className="tourlist">
          {tours.map((tour) => (
            <div key={tour} className="TourlistComponent">
              <div className="tourlistimg"></div>
              <div className="tourlistdisc">
                <div className="tourlisttitle">{tour.title}</div>
                <div className="tourlistdescription">{tour.description}</div>
              </div>
              <div className="tourlistbook">
                <div className="tourlistprice">
                  <p>Starts From</p> ₹ {tour.price}/-
                  <p>Per Person</p>
                  Travel {tour.days}
                </div>
                <div className="tourlistdays"></div>
                <div className="viewsingletour">
                  <Link to={`/tour/${tour.id}`} className="tourlistviewmore">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Tourlist;
