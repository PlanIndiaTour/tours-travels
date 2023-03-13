import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";
import AdNavbar from "../AdNavbar/AdNavbar";
import { getBookings, deleteBooking } from "../../../service/api";
import { Box } from "@mui/system";

// import { ToastContainer, toast } from "react-toastify";

const StyledTable = styled(Table)`
  width: 95%;
  margin: 40px auto 40px auto;
`;
const Thead = styled(TableRow)`
  background: #520f54;

  & > th {
    color: #fff;
    font-size: 20px;
    // max-width: 20px;
  }
`;

const TRow = styled(TableRow)`
  background: #c6deff;
  & > td {
    font-size: 20px;
  }
`;

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // document.title = "AdminDashboard | Tours";
    getBookingDetails();
  }, []);

  const getBookingDetails = async () => {
    let response = await getBookings();
    // console.log(response);
    setBookings(response.data);
    // toast.success("All Tours are loaded");
  };

  const deleteBookingData = async (id) => {
    await deleteBooking(id);
    getBookingDetails();
  };

  return (
    <div>
      <AdNavbar />
      <Box margin="50px" border="1px solid black">
        <StyledTable>
          <TableHead>
            <Thead>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Adult</TableCell>
              <TableCell>Children</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>TourName</TableCell>
              <TableCell></TableCell>
            </Thead>
          </TableHead>

          <TableBody>
            {bookings.map((booking) => (
              <TRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.title}</TableCell>
                <TableCell>{booking.description}</TableCell>
                <TableCell>{booking.itinerary}</TableCell>
                <TableCell>{booking.price}</TableCell>
                <TableCell>{booking.days}</TableCell>

                {/* <Button
                  component={Link}
                  to={`/edittour/${booking.id}`}
                  variant="contained"
                  style={{ marginTop: 12, marginRight: 15 }}
                  className="editbooking"
                >
                  Edit Booking
                </Button> */}

                <Button
                  variant="contained"
                  style={{ marginTop: 12, marginRight: 15 }}
                  onClick={() => deleteBookingData(booking.id)}
                >
                  Cancel
                </Button>
              </TRow>
            ))}
          </TableBody>
        </StyledTable>
      </Box>
      <Box textAlign="center">
        {/* <Button variant="contained" style={{ marginTop: 12, marginRight: 15 }}>
          Add Destination
        </Button> */}
      </Box>
    </div>
  );
};

export default Bookings;
