// src/components/HeadlineList.js
import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchHeadlines } from "../services/newsApi";
import HeadlineCard from "./HeadLineCard";

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
  }, [page]);

  useEffect(() => {
    loadMoreHeadlines(); // Load initial headlines
  }, [loadMoreHeadlines]);

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
