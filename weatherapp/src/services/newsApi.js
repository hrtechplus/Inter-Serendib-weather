import axios from "axios";

const API_KEY = "d375355a251c4e448eead2cec74ae275";
// const BASE_URL = "https://newsapi.org/v2";

export const fetchHeadlinesByCategory = async (category) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
    params: {
      category,
      apiKey: API_KEY,
    },
  });
  return response.data.articles;
};
