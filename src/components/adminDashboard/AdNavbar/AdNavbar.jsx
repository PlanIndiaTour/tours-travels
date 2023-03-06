import React from "react";
import { Toolbar, AppBar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
background:#111111;
margin-bottom:50px;
width: '100%';
`

const Tabs =styled(NavLink)`
font-size:30px;
margin-right:80px;
color:inherit;
text-decoration:none;
`

const AdNavbar = () => {
    return ( 
        <Header position="static" >
            <Toolbar>
                <Tabs to="/Dashboard">Admin Dashboard</Tabs>
                <Tabs to="/allUser">All User</Tabs>
                <Tabs to="/destinations">Destinations</Tabs>
                <Tabs to="/bookings">Bookings</Tabs>
                <Tabs to="/feedback">Feedback</Tabs>
            </Toolbar>
        </Header>
     );
}
 
export default AdNavbar;