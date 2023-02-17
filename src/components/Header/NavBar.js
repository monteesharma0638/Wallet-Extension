/*global chrome*/
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { Chip } from '@mui/material';
import AccountMenu from './navbar/AccountMenu';
import NetworkMenu from './navbar/NetworkMenu';

export default function NavBar() {
  const navigate = useNavigate();
  const [heading, setHeading] = React.useState("Kainet");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <NetworkMenu />
          </Box>
          <AccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}