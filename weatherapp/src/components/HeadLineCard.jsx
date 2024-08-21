// src/components/HeadlineCard.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const HeadlineCard = ({ article }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Column layout for mobile, row for larger screens
        width: "100%",
        height: { xs: "auto", sm: "250px" }, // Auto height on mobile
        justifyContent: "space-between",
      }}
    >
      {/* Left Side: Image */}
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: "40%" }, // Full width on mobile, 40% width on larger screens
          height: { xs: "200px", sm: "100%" }, // Adjust height for responsiveness
          objectFit: "cover",
        }}
        image={article.urlToImage}
        alt={article.title}
      />

      {/* Right Side: Text Content */}
      <Box
        sx={{
          width: { xs: "100%", sm: "60%" }, // Full width on mobile, 60% width on larger screens
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.description
              ? article.description.slice(0, 100) + "..."
              : "No description available"}
          </Typography>
        </CardContent>
        <CardActions sx={{ paddingBottom: 2 }}>
          <Button size="small" href={article.url} target="_blank">
            Read more...
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default HeadlineCard;
