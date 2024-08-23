import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import TextLine from "./TextLine";

const AppBarMain = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#202124" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        {/* Logo --1 */}
        <TextLine
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          text="Serendib News"
        />

        {/* Search Bar --1 */}
        <SearchBar />
        {/* Search Bar --1 */}
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMain;
