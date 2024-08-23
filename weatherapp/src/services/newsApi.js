import axios from "axios";

const API_KEY = "d375355a251c4e448eead2cec74ae275";
const BASE_URL = "https://newsapi.org/v2/everything";

export const fetchHeadlines = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        // You can choose any country code here
        apiKey: API_KEY,
        page: page,
        language: "en",
        // country: "us",
        sortBy: "publishedAt",
        q: "Windows",
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching headlines:", error);
    throw error;
  }
};
