import { Box, Typography } from "@mui/material";
import React from "react";
import AdNavbar from "../AdNavbar/AdNavbar";

const Dashboard = () => {
  return (
    <div>
      <AdNavbar />
      <Box margin="50px" padding="20px" border="1px solid Black" height="71vh">
        <Typography
          gutterBottom
          variant="h3"
          display="flex"
          justifyContent="center"
          paddingTop="150px"
        >
          WELCOME TO ADMIN DASHBOARD OF PLANIT
        </Typography>
      </Box>
    </div>
  );
};

export default Dashboard;
