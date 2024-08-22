import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchHeadlines } from "../services/newsApi";
import HeadlineCard from "./HeadLineCard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HeadlineList = () => {
  const [headlines, setHeadlines] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const loadMoreHeadlines = useCallback(async () => {
    try {
      const newHeadlines = await fetchHeadlines(page);
      setHeadlines((prevHeadlines) => [...prevHeadlines, ...newHeadlines]);
      setPage((prevPage) => prevPage + 1);
      if (newHeadlines.length === 0) setHasMore(false); // No more headlines
    } catch (error) {
      console.error(error);
    }
  }, [page]);

  useEffect(() => {
    loadMoreHeadlines();
  }, [loadMoreHeadlines]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Optionally, implement search logic
  };

  return (
    <Box>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#1E1E1E" }}>
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src="/path-to-your-logo.png"
              alt="Logo"
              style={{ height: "40px" }}
            />
          </Typography>

          {/* Search Bar */}
          <Box
            sx={{
              position: "relative",
              borderRadius: 1,
              backgroundColor: alpha("#ffffff", 0.15),
              "&:hover": {
                backgroundColor: alpha("#ffffff", 0.25),
              },
              marginLeft: 0,
              width: "100%",
              [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(1),
                width: "auto",
              },
            }}
          >
            <IconButton sx={{ p: 1 }}>
              <SearchIcon sx={{ color: "#ffffff" }} />
            </IconButton>
            <InputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
              sx={{
                color: "inherit",
                "& .MuiInputBase-input": {
                  padding: theme.spacing(1, 1, 1, 0),
                  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                  transition: theme.transitions.create("width"),
                  width: "100%",
                  [theme.breakpoints.up("sm")]: {
                    width: "20ch",
                  },
                },
              }}
              value={searchQuery}
              onChange={handleSearch}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Headline List */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
          boxShadow: 3,
          borderRadius: 3,
          padding: 2,
          backgroundColor: "white",
          maxWidth: { xs: "100%", sm: "90%", md: "80%" },
          marginTop: 4,
        }}
      >
        <InfiniteScroll
          dataLength={headlines.length}
          next={loadMoreHeadlines}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <Box sx={{ width: "100%" }}>
            {headlines.map((article, index) => (
              <HeadlineCard key={index} article={article} />
            ))}
          </Box>
        </InfiniteScroll>
      </Container>
    </Box>
  );
};

export default HeadlineList;
