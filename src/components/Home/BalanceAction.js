import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

export default function BalanceAction() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Avatar sx={{ my: 2 }}>
        <WalletIcon />
      </Avatar>
      <Typography variant="h3">0 ETH</Typography>
      <Typography variant="caption">$0.00 USD</Typography>
      <IconButton onClick={() => navigate("/sendaddrslc")}>
        <Tooltip title="Send">
          <SendIcon />
        </Tooltip>
      </IconButton>
    </Box>
  );
}
