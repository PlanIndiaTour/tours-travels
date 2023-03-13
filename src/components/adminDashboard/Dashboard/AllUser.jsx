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
import { Box } from "@mui/system";

// import React from 'react';

import AdNavbar from "../AdNavbar/AdNavbar";
import { getUsers, deleteUser } from "../../../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 95%;
  margin: 40px auto 40px auto;
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

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUserDetails();
  };

  const getUserDetails = async () => {
    let response = await getUsers();
    // console.log(response);
    setUsers(response.data);
  };

  return (
    <div>
      <AdNavbar />
      <Box margin="50px" border="1px solid black">
        <StyledTable>
          <TableHead>
            <Thead>
              <TableCell>Id</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Password</TableCell>
              <TableCell></TableCell>
            </Thead>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.fullname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.contact}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.password}</TableCell>

                <Button
                  component={Link}
                  to={`/editprofile/${user.id}`}
                  variant="contained"
                  style={{ marginTop: 12, marginRight: 15 }}
                  className="editprofile"
                >
                  Edit Profile
                </Button>

                {/* <Link to="/profile" onClick={deleteUserData(user.id)} className="ssubmit">
                <input type="submit" value="Submit" />
              </Link> */}

                <Button
                  variant="contained"
                  style={{ marginTop: 12, marginRight: 15 }}
                  onClick={() => deleteUserData(user.id)}
                >
                  Delete
                </Button>
              </TRow>
            ))}
          </TableBody>
        </StyledTable>
      </Box>
    </div>
  );
};

export default AllUser;
