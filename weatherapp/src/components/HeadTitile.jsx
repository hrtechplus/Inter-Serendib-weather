import { Container, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
export default function () {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        style={{ fontWeight: "normal", color: "#fff" }}
      >
        Top Headlines
      </Typography>
      {/* add the current date  to  user */}
      <Typography
        variant="body2"
        sx={{ color: "#BDC1C6", paddingLeft: isMobile ? 0 : 1 }}
      >
        {new Date().toDateString()}
      </Typography>
    </Container>
  );
}
