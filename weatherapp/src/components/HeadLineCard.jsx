import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useMediaQuery, useTheme } from "@mui/material";

const HeadlineCard = ({ article }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <CardMedia
          component="img"
          height={isMobile ? 200 : 300}
          width={isMobile ? "100%" : "auto"}
          image={article.urlToImage || "/static/images/cards/default-image.jpg"}
          alt={article.title}
          style={{ objectFit: "cover" }} // Center the image
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            <Link
              to={`/headline/${encodeURIComponent(article.title)}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {article.title}
            </Link>
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
      </Grid>
    </Grid>
  );
};

export default HeadlineCard;
