import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "@fontsource/eb-garamond";
import { Outlet } from "react-router-dom";

const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
        main: "#ffd700"
    }
  },
  typography: {
    h6: {
        fontFamily: "EB Garamond"
    }
  }
});

export default function DataContext() {
  return (
    <div>
      <ThemeProvider theme={theme}><Outlet /></ThemeProvider>
    </div>
  );
}
