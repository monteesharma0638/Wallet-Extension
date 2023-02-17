import { Button, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/Header/NavBar";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import { useNavigate } from "react-router-dom";

export default function SendAddressSelection() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Box display={"flex"} justifyContent="space-between" alignItems="center">
        <Box sx={{ px: 6 }}></Box>
        <Typography> Send to </Typography>
        <Button onClick={() => navigate("/home")}> Cancel </Button>
      </Box>
      <Box sx={{ px: 2 }}>
        <TextField
          placeholder="Search, public address (0x), or ENS"
          fullWidth
          InputProps={{
            startAdornment: (
              <IconButton>
                {" "}
                <SearchIcon />{" "}
              </IconButton>
            ),
            endAdornment: (
              <IconButton>
                {" "}
                <GridViewIcon />{" "}
              </IconButton>
            ),
          }}
        />
      </Box>
    </>
  );
}
