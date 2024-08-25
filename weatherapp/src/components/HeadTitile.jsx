import React from "react";
import { Container, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { colors } from "../style/colors"; // Importing colors

export default function TopHeadlines() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography
        variant={isMobile ? "h4" : "h4"}
        sx={{ fontWeight: "normal", color: colors.textColor, lineHeight: 0.9 }}
      >
        Top Headlines
      </Typography>
      {/* add the current date to user */}
      <Typography
        variant="body2"
        sx={{
          color: colors.metaColor,
          paddingLeft: isMobile ? 0 : 1,
        }}
      >
        {new Date().toDateString()}
      </Typography>
    </Container>
  );
}
