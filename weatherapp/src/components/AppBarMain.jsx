import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import SearchBar from "./SearchBar";
import TextLine from "./TextLine";
import RefreshSharpIcon from "@mui/icons-material/RefreshSharp";

const AppBarStyle = [
  {
    display: "flex",
    backgroundColor: "#202124",
    alignItems: "space-around",
    boxShadow: 0,
    lineHeight: 1,
    paddingY: 2,
  },
  {
    color: "#BDC1C6",
    boxShadow: "2",
    padding: 1,
    marginX: 1,
    borderRadius: 2,
    cursor: "pointer",
  },
];
const AppBarMain = () => {
  return (
    <AppBar position="static" sx={AppBarStyle[0]}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        {/* Logo --1 */}
        <TextLine variant="h6" text="Serendib" />

        {/* Search Bar --1 */}
        <SearchBar />

        <RefreshSharpIcon sx={AppBarStyle[1]} />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMain;
