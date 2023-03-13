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
import { getTours, deleteTour } from "../../../service/api";
import { Box } from "@mui/system";
import AddTour from "./AddTour";

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

const AllTours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    // document.title = "AdminDashboard | Tours";
    getTourDetails();
  }, []);

  const getTourDetails = async () => {
    let response = await getTours();
    // console.log(response);
    setTours(response.data);
    // toast.success("All Tours are loaded");
  };

  const deleteTourData = async (id) => {
    await deleteTour(id);
    getTourDetails();
  };

  return (
    <div>
      <AdNavbar />
      <Box margin="50px" border="1px solid black">
        <StyledTable>
          <TableHead>
            <Thead>
              <TableCell>Id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Itinerary</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Days</TableCell>
              <TableCell></TableCell>
            </Thead>
          </TableHead>

          <TableBody>
            {tours.map((tour) => (
              <TRow key={tour.id}>
                <TableCell>{tour.id}</TableCell>
                <TableCell>{tour.title}</TableCell>
                <TableCell>{tour.description}</TableCell>
                <TableCell>{tour.itinerary}</TableCell>
                <TableCell>{tour.price}</TableCell>
                <TableCell>{tour.days}</TableCell>

                <Button
                  component={Link}
                  to={`/edittour/${tour.id}`}
                  variant="contained"
                  style={{ marginTop: 12, marginRight: 15 }}
                  className="edittour"
                >
                  Edit Tour
                </Button>

                <Button
                  variant="contained"
                  style={{ marginTop: 12, marginRight: 15 }}
                  onClick={() => deleteTourData(tour.id)}
                >
                  Delete Tour
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
      <AddTour />
    </div>
  );
};

export default AllTours;
