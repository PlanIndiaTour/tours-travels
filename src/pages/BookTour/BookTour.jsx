import React from "react";
import { useState } from "react";
import { bookTour } from "../../service/api";
// import { addTour } from "../../../service/api";
import "./bookTour.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  number: "",
  adult: "",
  children: "",
  date: "",
  tourname: "",
};

const BookTour = () => {
  const [book, setBook] = useState(initialValues);
  const { name, email, number, adult, children, date, tourname } = book;

  const onValueChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const AddBooking = async (e) => {
    e.preventDefault();
    await bookTour(book);
    // <Link to="/"></Link>;
  };

  return (
    <>
      <Navbar />
      <div className="Booking-page">
        <div className="Booking-form">
          <form onSubmit={AddBooking} className="Book-form" id="form1">
            <p className="Booking-text">
              <input
                onChange={(e) => onValueChange(e)}
                value={name}
                type="text"
                name="name"
                placeholder="name"
                id="name"
              />
            </p>

            <p className="Booking-text">
              <input
                onChange={(e) => onValueChange(e)}
                value={email}
                type="email"
                name="email"
                placeholder="email"
                id="email"
              />
            </p>

            <p className="Booking-text">
              <input
                onChange={(e) => onValueChange(e)}
                value={number}
                type="number"
                name="number"
                placeholder="number"
                id="number"
              />
            </p>

            <p className="Booking-text">
              <input
                onChange={(e) => onValueChange(e)}
                value={adult}
                type="number"
                name="adult"
                placeholder="adult"
                id="adult"
              />
            </p>

            <p className="Booking-text">
              <input
                onChange={(e) => onValueChange(e)}
                value={children}
                type="number"
                name="children"
                placeholder="children"
                id="children"
              />
            </p>

            <p className="Booking-text">
              <input
                onChange={(e) => onValueChange(e)}
                value={date}
                type="text"
                name="date"
                placeholder="date"
                id="date"
              />
            </p>

            <p className="Booking-text">
              <input
                onChange={(e) => onValueChange(e)}
                value={tourname}
                type="text"
                name="tourname"
                placeholder="tourname"
                id="tourname"
              />
            </p>

            <div className="Book-submit">
              <input type="submit" value="BOOK NOW" Book-button />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookTour;
