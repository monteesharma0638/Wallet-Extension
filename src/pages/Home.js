/* global chrome */
import { CircularProgress, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Header/NavBar";
import AssetsActivity from "../components/Home/AssetsActivity";
import BalanceAction from "../components/Home/BalanceAction";
import Accounts from "../components/subHeader/Accounts";
import { storageApi } from "../ethereum/storage";

export default function Home() {
  const navigate = useNavigate();
  const [data, setData] = React.useState(1);

  storageApi.getItems(["mnemonic", "loggedIn"]).then((data) => setData(data));

  
  
  return data ? (
    <Box>
      <NavBar data={data} />
      <Divider />
      <Accounts />
      <Divider />
      <BalanceAction />
      <Divider />
      <AssetsActivity />
    </Box>
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress />
    </Box>
  );
}
