import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Chip, Menu } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountsMenu from '../Home/AccountsMenu';

export default function Accounts() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{backgroundColor: "lightgrey"}}>
        <Toolbar>
          <Chip label="connected" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            0xb...obc
          </Typography>
            <AccountsMenu />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}