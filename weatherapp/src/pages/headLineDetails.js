// src/pages/HeadlineDetail.js
import React from "react";
import { useLocation } from "react-router-dom";

const HeadlineDetail = () => {
  const location = useLocation();
  const { article } = location.state;

  return (
    <div className="headline-detail">
      <h1>{article.title}</h1>
      <p>
        <strong>Source:</strong> {article.source.name}
      </p>
      <p>
        <strong>Author:</strong> {article.author}
      </p>
      <p>
        <strong>Published At:</strong>{" "}
        {new Date(article.publishedAt).toLocaleString()}
      </p>
      <img
        src={article.urlToImage}
        alt={article.title}
        className="detail-image"
      />
      <p>{article.content || article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read Full Article
      </a>
    </div>
  );
};

export default HeadlineDetail;
