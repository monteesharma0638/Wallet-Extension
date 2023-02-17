import { Box, Button, Card, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreatePassword() {
  const [password, setPassword] = React.useState("");
  const [confPass, setConfPass] = React.useState("");
  const passwordValid = password && confPass && password === confPass;
  const navigate = useNavigate();

  return (
    <Card>
        <Box justifyContent="center" alignItems="center" display="flex" height="100vh" flexDirection={"column"}>
            <TextField label="New Password" sx={{mb: 2}} value={password} onChange={e => setPassword(e.target.value)} />
            <TextField label="Confirm Password" sx={{mb: 2}} value={confPass} onChange={e => setConfPass(e.target.value)} color={passwordValid? "success" : "error"} />
            <Button variant="contained" disabled={!passwordValid} onClick={() => navigate("/create-new-wallet/"+password)}> Next </Button>
        </Box>
    </Card>
  )
}
