import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchHeadlines } from "../services/newsApi";
import HeadlineCard from "./HeadLineCard";
import Container from "@mui/material/Container";

import AppBarMain from "./AppBarMain";

const HeadlineList = () => {
  const [headlines, setHeadlines] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreHeadlines = async () => {
    try {
      const newHeadlines = await fetchHeadlines(page);
      setHeadlines([...headlines, ...newHeadlines]);
      setPage(page + 1);
      if (newHeadlines.length === 0) setHasMore(false); // No more headlines
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMoreHeadlines(); // Load initial headlines
  }, []); // Only call once when component mounts

  return (
    <>
      <AppBarMain />

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
          padding: 2,
          backgroundColor: "#F5F5F5",
        }}
      >
        <InfiniteScroll
          dataLength={headlines.length}
          next={loadMoreHeadlines}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="headline-list" style={{ width: "100%" }}>
            {headlines.map((article, index) => (
              <HeadlineCard key={index} article={article} />
            ))}
          </div>
        </InfiniteScroll>
      </Container>
    </>
  );
};

export default HeadlineList;
