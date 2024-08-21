// src/pages/MainPage.js
import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, TextField } from "@mui/material";
import HeadlineCard from "../components/HeadLineCard";
import { fetchHeadlines } from "../services/newsApi";
import "../style/style.css";

const MainPage = () => {
  const [headlines, setHeadlines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getHeadlines = async () => {
      const fetchedHeadlines = await fetchHeadlines();
      setHeadlines(fetchedHeadlines);
    };
    getHeadlines();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredHeadlines = headlines.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ paddingTop: 4, color: "white" }}>
      {/* Search Bar */}
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        sx={{
          marginBottom: 4,
          backgroundColor: "#1e1e1e",
          input: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "gray",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
          },
        }}
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Section Title */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{ color: "#fff", marginBottom: 4 }}
      >
        Technology
      </Typography>

      {/* Grid Layout for Cards */}
      <Grid container spacing={4}>
        {filteredHeadlines.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <HeadlineCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainPage;
