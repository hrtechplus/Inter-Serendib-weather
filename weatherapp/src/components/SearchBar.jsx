import { Box, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Style = {
  display: "flex",
  alignItems: "center",
  marginX: 2,
  backgroundColor: "#444",
  borderRadius: 2,
  padding: 1,
  width: { xs: "100%", sm: "50%" },
  cursor: "pointer",
};
export default function SearchBar() {
  return (
    <Box sx={Style}>
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
  );
}
