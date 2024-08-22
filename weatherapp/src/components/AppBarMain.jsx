import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const AppBarMain = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#202124", boxShadow: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Serendib News
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#444",
            borderRadius: 1,
            paddingLeft: 1,
          }}
        >
          <SearchIcon sx={{ color: "#BDC1C6 " }} />
          <InputBase
            placeholder="Search…"
            sx={{
              color: "#BDC1C6",
              paddingLeft: 1,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMain;
