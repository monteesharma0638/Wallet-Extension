/* global chrome */
import { Avatar, Box, Link, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { storageApi } from '../ethereum/storage';

export default function CreatePopup() {
  const navigate = useNavigate();

  storageApi.getItems(["loggedIn", "mnemonic"]).then(({loggedIn, mnemonic})=> {
    if(loggedIn && mnemonic){
      navigate("/home");
    }
    else if(mnemonic){
      navigate("/login");
    }
  })

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" flexDirection="column">
        <Avatar sx={{height: 120, width: 120}}>K</Avatar>
        <Link color="secondary">Import Using Seed Parse</Link>
        <Typography>Do Not Have Wallet? <Link color="secondary" onClick={() => navigate("/create-password")}>Create New Wallet</Link></Typography>
    </Box>
  )
}
