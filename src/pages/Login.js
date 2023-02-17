/*global chrome*/
import { Avatar, Button, Link, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LoginNav from '../components/Header/LoginNav';

export default function Login() {

  return (
    <div>
        <LoginNav />
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" sx={{minHeight: "80vh"}}>
            <Avatar src="M" alt="M" sx={{height: "100px", width: "100px", mb: 5}} />
            <TextField label="Password" type="password" color="secondary" />
            <Button variant="contained" sx={{mt: "10px", width: 200}}> Login </Button>
            <Link sx={{mt: "20px"}} color="secondary">Forgot Password</Link>
        </Box>
    </div>
  )
}
