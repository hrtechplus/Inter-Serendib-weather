import axios from "axios";

const API_KEY = "84501c5d50cc4379b4ae3bc0d36c5a67";
const BASE_URL = "https://newsapi.org/v2/everything";

export const fetchHeadlines = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        // You can choose any country code here
        apiKey: API_KEY,
        page: page,
        q: "technology",
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching headlines:", error);
    throw error;
  }
};
