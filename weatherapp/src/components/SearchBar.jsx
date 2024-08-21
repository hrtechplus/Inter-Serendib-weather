// src/components/SearchBar.js
import React from "react";
import { Box, TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <Box
      sx={{
        marginTop: 2,
        marginBottom: 2,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        label="Search"
        variant="outlined"
        sx={{
          width: { xs: "100%", sm: "60%" }, // Full width on mobile, 60% width on larger screens
        }}
      />
    </Box>
  );
};

export default SearchBar;
