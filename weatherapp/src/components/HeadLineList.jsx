import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchHeadlines } from "../services/newsApi";
import HeadlineCard from "./HeadLineCard";
import Container from "@mui/material/Container";
import { useMediaQuery, useTheme } from "@mui/material";
import AppBarMain from "./AppBarMain";
import { Typography } from "@mui/material";

const HeadlineList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
      <Container>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          style={{ fontWeight: "normal", color: "#fff" }}
        >
          Top Headlines
        </Typography>
        {/* add the current date  */}
        <Typography variant="body1" style={{ color: "#BDC1C6" }}>
          {new Date().toDateString()}
        </Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 4,
          minHeight: "100vh",
          marginTop: 2,
          padding: 2,
          backgroundColor: "#1F1F1F",
          width: { xs: "100%", sm: "70%" },
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
