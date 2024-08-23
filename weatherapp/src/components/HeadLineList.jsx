import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchHeadlines } from "../services/newsApi";
import Container from "@mui/material/Container";
import { useMediaQuery, useTheme } from "@mui/material";
import AppBarMain from "./AppBarMain";
import HeadTitile from "./HeadTitile";
import HeadlineCard from "./HeadLineCard";

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

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 4,
          minHeight: "10vh",
          marginTop: 2,
          backgroundColor: "#292A2D",
          width: { xs: "100%", sm: "80%" },
        }}
      >
        <HeadTitile />
        <Container
          sx={{
            borderRadius: 4,
            minHeight: "90vh",
            marginTop: 2,
            padding: 2,
            backgroundColor: "#1F1F1F",
            width: { xs: "100%", sm: "80%" },
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
      </Container>
    </>
  );
};

export default HeadlineList;
