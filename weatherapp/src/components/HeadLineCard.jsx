import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const HeadlineCard = ({ article }) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: "100%",
        marginBottom: 2,
        backgroundColor: "#1e1e1e",
        color: "white",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 300, objectFit: "cover" }}
        image={article.urlToImage}
        alt={article.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="h5" variant="h5" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="subtitle1" color="gray">
            {article.author
              ? `${article.author} | ${article.source.name}`
              : article.source.name}{" "}
            {new Date(article.publishedAt).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" color="gray" sx={{ marginTop: 1 }}>
            {article.description}
          </Typography>
        </CardContent>
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" color="gray">
            <Link
              to={`/headline/${encodeURIComponent(article.title)}`}
              state={{ article }}
              style={{ color: "#90caf9", textDecoration: "none" }}
            >
              Read more...
            </Link>
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default HeadlineCard;
