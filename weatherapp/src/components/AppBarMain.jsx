import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import SearchBar from "./SearchBar";
import RefreshSharpIcon from "@mui/icons-material/RefreshSharp";
import Logo from "../img/icon.jpg";
import { colors } from "../style/colors";

const AppBarStyle = [
  {
    display: "flex",
    backgroundColor: colors.appBarBackground,
    alignItems: "space-around",
    boxShadow: 0,
    lineHeight: 1,
    paddingY: 2,
  },
  {
    color: colors.dividerColor,
    boxShadow: "2",
    padding: 1,
    marginX: 1,
    borderRadius: 2,
    cursor: "pointer",
  },
  {
    flexGrow: 1,
  },
];

const AppBarMain = () => {
  return (
    <AppBar position="static" sx={AppBarStyle[0]}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        {/* Logo --1 */}
        <img src={Logo} width={"150px"} alt="Serendib News icon" />
        {/* Search Bar --1 */}
        <SearchBar sx={AppBarStyle[2]} />
        <RefreshSharpIcon sx={AppBarStyle[1]} />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMain;
