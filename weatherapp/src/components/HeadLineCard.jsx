import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { useMediaQuery, useTheme } from "@mui/material";

const HeadlineCard = ({ article, relatedArticles }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const articleLink = `/headline/${encodeURIComponent(article.title)}`;

  return (
    <Card
      style={{
        padding: "1rem",
        backgroundColor: "#1F1F1F",
        color: "#FFFFFF",
        borderTop: 1,
        width: "-webkit-fill-available",
        height: { xs: "40vh", sm: "auto" },
      }}
    >
      <Divider
        style={{ backgroundColor: "#BDC1C6", marginTop: 4, marginBottom: 8 }}
      />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            height={isMobile ? 120 : 200}
            image={
              article.urlToImage || "/static/images/cards/default-image.jpg"
            }
            alt={article.title}
            style={{ borderRadius: "8px", objectFit: "cover", width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              <Link
                to={articleLink}
                style={{ textDecoration: "none", color: "#FFFFFF" }}
                state={{ article }}
              >
                {article.title}
              </Link>
            </Typography>
            <Typography variant="body2" color="#CCCCCC" gutterBottom>
              <strong>Source:</strong> {article.source.name} &nbsp;&nbsp; |
              &nbsp;&nbsp;
              <strong>Author:</strong> {article.author || "Unknown"}{" "}
              &nbsp;&nbsp; | &nbsp;&nbsp;
              <strong>Date:</strong>{" "}
              {new Date(article.publishedAt).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" color="#CCCCCC" gutterBottom>
              {article.description}
            </Typography>

            {relatedArticles && relatedArticles.length > 0 && (
              <div>
                {relatedArticles.map((related, index) => (
                  <div key={index} style={{ marginTop: "10px" }}>
                    <Typography variant="body2" color="#BBBBBB">
                      <Link
                        to={`/headline/${encodeURIComponent(related.title)}`}
                        style={{ textDecoration: "none", color: "#BBBBBB" }}
                      >
                        {related.title}
                      </Link>{" "}
                      - {related.source.name} -{" "}
                      {new Date(related.publishedAt).toLocaleTimeString()}
                    </Typography>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              component={Link}
              to={articleLink}
              state={{ article }}
              style={{ color: "#FFC107" }}
            >
              Read More
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HeadlineCard;
