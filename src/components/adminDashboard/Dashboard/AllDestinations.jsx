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
import { getDestis, deleteDesti } from "../../../service/api";
import { Box } from "@mui/system";
// import AddTour from "./AddTour";
import AddDestination from "./AddDestination";

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

const AllDestinations = () => {
  const [destis, setDestis] = useState([]);

  useEffect(() => {
    // document.title = "AdminDashboard | Tours";
    getDestiDetails();
  }, []);

  const getDestiDetails = async () => {
    let response = await getDestis();
    // console.log(response);
    setDestis(response.data);
    // toast.success("All Tours are loaded");
  };

  const deleteDestiData = async (id) => {
    await deleteDesti(id);
    getDestiDetails();
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
              <TableCell>City</TableCell>
              <TableCell>City Description</TableCell>
              <TableCell></TableCell>
            </Thead>
          </TableHead>

          <TableBody>
            {destis.map((desti) => (
              <TRow key={desti.id}>
                <TableCell>{desti.id}</TableCell>
                <TableCell>{desti.title}</TableCell>
                <TableCell>{desti.description}</TableCell>
                <TableCell>{desti.city}</TableCell>
                <TableCell>{desti.citydescription}</TableCell>
                <Button
                component={Link}
                to={`/editdestination/${desti.id}`}
                variant="contained"
                style={{ marginTop: 12, marginRight: 15 }}
                className="editdestination"
                >
                  Edit Destination
                </Button>
                <Button
                  variant="contained"
                  style={{ marginTop: 12, marginRight: 15 }}
                  onClick={() => deleteDestiData(desti.id)}
                >
                  Delete Destination
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
      <AddDestination />
    </div>
  );
};

export default AllDestinations;