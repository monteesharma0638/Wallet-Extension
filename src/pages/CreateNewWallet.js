/* global chrome */
import { Button, Card, Chip } from '@mui/material'
import { Box } from '@mui/system'
import { ethers } from 'ethers';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import md5 from 'md5';

export default function CreateNewWallet() {
  const [wallet, setWallet] = React.useState(ethers.Wallet.createRandom());
  const { password } = useParams();
  const navigate = useNavigate();

  function handleCopy(){
    navigator.clipboard.writeText(wallet.mnemonic.phrase);
  }

  async function handleNext(){
    await chrome.storage.local.set({mnemonic: wallet.mnemonic.phrase, account: wallet.address, privateKey: wallet.privateKey, password: md5(password), loggedIn: 1});
    navigate("/");
  }

  return (
    <Box>
        <Card sx={{mx: 1, mt: 10, p: 1}} elevation={3}>
          {wallet.mnemonic.phrase.split(" ").map((value, index) => (
            <Chip label={value} key={index}  sx={{m: 0.5}}  />
          ))}
        </Card>
        <Button variant="outlined" sx={{mt: 6}} onClick={handleCopy} color="info"> Copy to ClipBoard </Button>
        <Button fullWidth variant="contained" onClick={handleNext} sx={{position: "fixed", bottom: 0, right: 0, left: 0}}> Next </Button>
    </Box>
  )
}
