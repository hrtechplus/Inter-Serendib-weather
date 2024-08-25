import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchHeadlines } from "../services/newsApi";
import Container from "@mui/material/Container";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import {
  Grow,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppBarMain from "./AppBarMain";
import HeadTitile from "./HeadTitile";
import HeadlineCard from "./HeadLineCard";
import { colors } from "../style/colors";
const HeadlineList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [headlines, setHeadlines] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreHeadlines = async () => {
    try {
      const newHeadlines = await fetchHeadlines(page);
      setHeadlines([...headlines, ...newHeadlines]);
      setPage(page + 1);
      if (newHeadlines.length === 0) setHasMore(false); // No more headlines
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMoreHeadlines(); // Load initial headlines
  }, []); // Only call once when component mounts

  return (
    <>
      <AppBarMain />

      <Container sx={styles[0]}>
        <HeadTitile />
        <Container sx={styles[1]}>
          {/* // top story titile  */}
          <Container sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              paddingLeft={isMobile ? 2 : 0}
              color={colors.topStoriesColor}
            >
              Top stories
            </Typography>
            <ArrowForwardIosSharpIcon
              sx={{
                color: colors.topStoriesColor, // icon color here
                backgroundColor: "transparent", // background color is transparent
              }}
            />
          </Container>

          <InfiniteScroll
            dataLength={headlines.length}
            next={loadMoreHeadlines}
            hasMore={hasMore}
            loader={
              <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
            }
          >
            <div className="headline-list" style={{ width: "100%" }}>
              {headlines.map((article, index) => (
                <Grow
                  key={index}
                  in={true} // Trigger the transition
                  timeout={500} //  duration of the transition in ms
                >
                  <div>
                    <HeadlineCard article={article} />
                  </div>
                </Grow>
              ))}
            </div>
          </InfiniteScroll>
        </Container>
      </Container>
    </>
  );
};

export default HeadlineList;

//styles and colors

const styles = [
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 4,
    minHeight: "10vh",
    marginTop: 2,
    backgroundColor: colors.secondaryContainerBackground,
  },
  {
    borderRadius: 4,
    minHeight: "90vh",
    marginTop: 2,
    padding: 2,
    backgroundColor: colors.cardBackground,
    width: { xs: "100%", sm: "80%" },
  },
];
