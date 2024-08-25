import { Box, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { colors } from "../style/colors";

const style = {
  display: "flex",
  alignItems: "center",
  marginX: 2,
  backgroundColor: colors.searchBarBackground,
  borderRadius: 2,
  padding: 1,
  width: { xs: "100%", sm: "50%" },
  cursor: "pointer",
};

export default function SearchBar() {
  return (
    <Box sx={style}>
      <SearchIcon sx={{ color: colors.dividerColor }} />
      <InputBase
        placeholder="Search.. keyword & article"
        sx={{
          color: colors.dividerColor,
          paddingLeft: 1,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
}
