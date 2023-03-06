import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from '@mui/material';
import React from 'react';

import AdNavbar from '../AdNavbar/AdNavbar';
import { getUsers, deleteUser } from '../../../service/api';



const StyledTable = styled(Table)`
width:80%;
margin: 90px auto 0 auto;
`
const Thead = styled(TableRow)`
background: #520F54;

& > th{
    color: #fff;
    font-size:20px;
    
}
`

const TBody = styled(TableRow)`
background: #C6DEFF;
& > td{
    font-size:20px;
}
`


const AllUser = () => {

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUserDetails( );
    }, [])

const getUserDetails = async () =>{
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
}

const deleteUserData = async (id) => {
    await deleteUser(id);
    getUserDetails();
}

    return ( 
        <div>
            <AdNavbar/>
            <StyledTable>
                <TableHead>
                    <Thead >
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
                    {
                        users.map(user => (
                            <TBody>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.fullname}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.contact}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.password}</TableCell>
                                <Button variant="contained" style={{marginTop:12, marginRight:15}} onClick={() => deleteUserData(user.id)}>Delete</Button>
                            </TBody>
                        ))
                        }
                </TableBody>
            </StyledTable>
        </div>
     );
}

 
export default AllUser;
