import React, { useEffect, useState } from "react";
import "./destinationlist.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { getDestis } from "../../service/api";

const Destinationlist = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestinationDetails();
  }, []);

  const getDestinationDetails = async () => {
    let response = await getDestis();
    setDestinations(response.data);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="tourlistPageTitle">Explore Destinations</div>
        <div className="destilist">
          {destinations.map((destination) => (
            <div key={destination} className="destilistComponent">
              <div className="destilistimg">img</div>
              <div className="destilistdisc">
                <div className="destilisttitle">{destination.title}</div>
                <div className="destilistdescription">
                  {destination.description}
                </div>
              </div>
              <div className="destilistbook">
                {/* <div className="destilistprice">{destination.city}</div>
                <div className="destilistdays">
                  {destination.citydescription}
                </div> */}

                <Link
                  to={`/destination/${destination.id}`}
                  className="destilistviewmore"
                >
                  Know more
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
