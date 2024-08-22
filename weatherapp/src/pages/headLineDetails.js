import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HeadlineDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state;

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Top Navigation with Back Button */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#1E1E1E", marginBottom: "2rem" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={() => navigate(-1)}
            sx={{ marginRight: "1rem" }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#FFFFFF" }}
          >
            Headlines
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Article Content */}
      <Card
        sx={{
          maxWidth: "900px",
          margin: "auto",
          backgroundColor: "#FFFFFF",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          {article.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#757575" }}>
            <strong>Source:</strong> {article.source.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#757575" }}>
            <strong>Author:</strong> {article.author || "Unknown"}
          </Typography>
        </Box>
        <Typography
          variant="subtitle2"
          sx={{ color: "#757575", marginBottom: "1rem" }}
        >
          <strong>Published At:</strong>{" "}
          {new Date(article.publishedAt).toLocaleString()}
        </Typography>

        <Divider sx={{ marginBottom: "1.5rem" }} />

        <CardMedia
          component="img"
          image={article.urlToImage || "/static/images/cards/default-image.jpg"}
          alt={article.title}
          sx={{
            height: "400px",
            borderRadius: "8px",
            objectFit: "cover",
            marginBottom: "2rem",
            width: "100%",
          }}
        />

        <Typography
          variant="body1"
          sx={{ color: "#333", lineHeight: "1.8", marginBottom: "2rem" }}
        >
          {article.content || article.description || "No content available."}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#1a73e8",
            "&:hover": {
              backgroundColor: "#155ab2",
            },
          }}
        >
          Read Full Article
        </Button>
      </Card>
    </Box>
  );
};

export default HeadlineDetail;
