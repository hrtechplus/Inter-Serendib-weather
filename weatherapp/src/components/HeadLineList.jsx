import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchHeadlines } from "../services/newsApi";
import HeadlineCard from "./HeadLineCard";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const HeadlineList = () => {
  const [headlines, setHeadlines] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreHeadlines = useCallback(async () => {
    try {
      const newHeadlines = await fetchHeadlines(page);
      setHeadlines((prevHeadlines) => [...prevHeadlines, ...newHeadlines]);
      setPage((prevPage) => prevPage + 1);
      if (newHeadlines.length === 0) setHasMore(false); // No more headlines
    } catch (error) {
      console.error(error);
    }
  }, [page]); // Dependency is the 'page' state

  useEffect(() => {
    loadMoreHeadlines(); // Load initial headlines
  }, [loadMoreHeadlines]); // Now stable with useCallback

  return (
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
  );
};

export default HeadlineList;
