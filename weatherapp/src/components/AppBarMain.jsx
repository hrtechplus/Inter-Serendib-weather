import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import SearchBar from "./SearchBar";
import TextLine from "./TextLine";
import RefreshSharpIcon from "@mui/icons-material/RefreshSharp";
const AppBarMain = () => {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        backgroundColor: "#202124",
        alignItems: "space-around",
        boxShadow: 0,
        lineHeight: 1,
        paddingY: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        {/* Logo --1 */}
        <TextLine variant="h6" text="Serendib" />

        {/* Search Bar --1 */}
        <SearchBar />

        <RefreshSharpIcon
          sx={{
            color: "#BDC1C6",
            border: 1,
            padding: 1,
            marginX: 1,
            borderRadius: 2,
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMain;
