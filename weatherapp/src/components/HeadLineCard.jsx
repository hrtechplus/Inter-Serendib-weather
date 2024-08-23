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
        borderRadius: "8px",
        width: "100%",
        height: isMobile ? "auto" : "auto",
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
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              style={{
                fontWeight: 500,
                color: "#FFC107",
                fontSize: isMobile ? "1rem" : "1.25rem",
              }}
            >
              <Link
                to={articleLink}
                style={{ textDecoration: "none", color: "#fff" }}
                state={{ article }}
              >
                {article.title}
              </Link>
            </Typography>

            <Typography
              variant="body2"
              color="#A8A8A8"
              gutterBottom
              style={{ fontSize: isMobile ? "0.85rem" : "1rem" }}
            >
              <strong>{article.author || "Unknown Author"}</strong> &nbsp;&nbsp;
              <strong>|</strong> {article.source.name} &nbsp;&nbsp;
              <strong>|</strong>{" "}
              {new Date(article.publishedAt).toLocaleDateString()}
            </Typography>

            <Typography
              variant="body2"
              color="#DDDDDD"
              gutterBottom
              style={{
                marginTop: "8px",
                lineHeight: 1.6,
                fontSize: isMobile ? "0.9rem" : "1rem",
              }}
            >
              {article.description}
            </Typography>

            {relatedArticles && relatedArticles.length > 0 && (
              <div>
                <Typography
                  variant="subtitle2"
                  color="#CCCCCC"
                  style={{
                    marginTop: "10px",
                    fontSize: isMobile ? "0.85rem" : "1rem",
                  }}
                >
                  Related Articles:
                </Typography>
                {relatedArticles.map((related, index) => (
                  <div key={index} style={{ marginTop: "6px" }}>
                    <Typography
                      variant="body2"
                      color="#BBBBBB"
                      style={{ fontSize: isMobile ? "0.8rem" : "0.95rem" }}
                    >
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
        </Grid>
      </Grid>
    </Card>
  );
};

export default HeadlineCard;
