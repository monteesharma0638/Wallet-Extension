/*global chrome*/
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function LoginNav() {
  const [network, setNetwork] = React.useState(1);

  const handleChange = (event) => {
    setNetwork(event.target.value);
  };

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

          <FormControl fullWidth>
            <InputLabel id="network-label"> Network </InputLabel>
            <Select
              labelId="network-label"
              value={network}
              label="Network"
              onChange={handleChange}
              variant="outlined"
            >
              <MenuItem value={1}>Ethereum</MenuItem>
              <MenuItem value={56}>Binance Smart Chain</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}