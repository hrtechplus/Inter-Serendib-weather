import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

const AppBarMain = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#202124", boxShadow: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Serendib News
        </Typography>
        {/* Search Bar */}
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMain;
