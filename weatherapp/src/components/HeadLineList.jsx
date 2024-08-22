// src/components/HeadlineList.js
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchHeadlines } from "../services/newsApi";
import HeadlineCard from "./HeadLineCard";

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
  }, []);

  return (
    <InfiniteScroll
      dataLength={headlines.length}
      next={loadMoreHeadlines}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <div className="headline-list">
        {headlines.map((article, index) => (
          <HeadlineCard key={index} article={article} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default HeadlineList;
