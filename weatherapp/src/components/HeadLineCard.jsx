import React from "react";
import { Link } from "react-router-dom";

const HeadlineCard = ({ article }) => {
  return (
    <div className="headline-card">
      <img src={article.urlToImage} alt={article.title} className="thumbnail" />
      <div className="headline-info">
        <h3>{article.title}</h3>
        <p>
          <strong>Source:</strong> {article.source.name}
        </p>
        <p>
          <strong>Author:</strong> {article.author || "Unknown"}
        </p>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
        <p>{article.description}</p>
        <Link
          to={`/headline/${encodeURIComponent(article.title)}`}
          state={{ article }}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default HeadlineCard;
