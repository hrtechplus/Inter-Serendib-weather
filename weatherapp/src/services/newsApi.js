import axios from "axios";

const API_KEY = "8d4aa361bb144732a895325830958f0f";
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
