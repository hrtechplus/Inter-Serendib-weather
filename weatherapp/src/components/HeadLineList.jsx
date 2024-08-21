// src/components/HomePage.js
import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import HeadlineCard from "./HeadLineCard"; // Import the card component

const articles = [
  /* Your array of articles */
];

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 4, marginBottom: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Technology
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <HeadlineCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
