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
import { colors } from "../style/colors";

const HeadlineDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: colors.secondaryContainerBackground,
        padding: "2rem",
      }}
    >
      {/* Top Navigation with Back Button */}
      <AppBar
        position="static"
        sx={{ backgroundColor: colors.appBarBackground, marginBottom: "2rem" }}
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
            sx={{ flexGrow: 1, color: colors.textColor }}
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
          backgroundColor: colors.cardBackground,
          color: colors.textColor,
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: colors.titleColor }}
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
          <Typography variant="subtitle1" sx={{ color: colors.metaColor }}>
            <strong>Source:</strong> {article.source.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: colors.metaColor }}>
            <strong>Author:</strong> {article.author || "Unknown"}
          </Typography>
        </Box>
        <Typography
          variant="subtitle2"
          sx={{ color: colors.metaColor, marginBottom: "1rem" }}
        >
          <strong>Published At:</strong>{" "}
          {new Date(article.publishedAt).toLocaleString()}
        </Typography>

        <Divider
          sx={{ backgroundColor: colors.dividerColor, marginBottom: "1.5rem" }}
        />

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
          sx={{
            color: colors.descriptionColor,
            lineHeight: "1.8",
            marginBottom: "2rem",
          }}
        >
          {article.content || article.description || "No content available."}
        </Typography>

        <Button
          variant="contained"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: colors.topStoriesColor,
            "&:hover": {
              backgroundColor: colors.relatedTitleColor,
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
