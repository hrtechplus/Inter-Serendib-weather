import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

const HeadlineCard = ({ article }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        maxWidth: isMobile ? "100%" : 345, // Full width on mobile, fixed width on larger screens
        marginBottom: 2,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={article.urlToImage || "/static/images/cards/default-image.jpg"}
        alt={article.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Source:</strong> {article.source.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Author:</strong> {article.author || "Unknown"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Date:</strong>{" "}
          {new Date(article.publishedAt).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={Link}
          to={`/headline/${encodeURIComponent(article.title)}`}
          state={{ article }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default HeadlineCard;
