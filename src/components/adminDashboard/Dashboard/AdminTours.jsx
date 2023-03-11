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

import AdNavbar from "../AdNavbar/AdNavbar";
import { getTours, deleteTour } from "../../../service/api";
import { Box } from "@mui/system";
import AddTour from "./AddTour";

// import { ToastContainer, toast } from "react-toastify";

const StyledTable = styled(Table)`
  width: 80%;
  margin: 90px auto 0 auto;
`;
const Thead = styled(TableRow)`
  background: #520f54;

  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

const TRow = styled(TableRow)`
  background: #c6deff;
  & > td {
    font-size: 20px;
  }
`;

const AdminTours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    // document.title = "AdminDashboard | Tours";
    getToursfromServer();
  }, []);

  const getToursfromServer = async () => {
    let response = await getTours();
    // console.log(response);
    setTours(response.data);
    // toast.success("All Tours are loaded");
  };

  const deleteTourData = async (id) => {
    await deleteTour(id);
    getToursfromServer();
  };

  return (
    <div>
      <AdNavbar />
      <Box
        margin="50px"
        padding="50px"
        paddingTop="0px"
        border="1px solid black"
      >
        <StyledTable>
          <TableHead>
            <Thead>
              <TableCell>Id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
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
                <TableCell>{tour.price}</TableCell>
                <TableCell>{tour.days}</TableCell>
                <Button
                  variant="contained"
                  style={{ marginTop: 12, marginRight: 15 }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  style={{ marginTop: 12, marginRight: 15 }}
                  onClick={() => deleteTourData(tour.id)}
                >
                  Delete
                </Button>
              </TRow>
            ))}
          </TableBody>
        </StyledTable>
      </Box>
      <Box textAlign="center">
        <Button variant="contained" style={{ marginTop: 12, marginRight: 15 }}>
          Add Tour
        </Button>
      </Box>
      <AddTour />
    </div>
  );
};

export default AdminTours;
