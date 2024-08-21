import axios from "axios";

const API_KEY = "d375355a251c4e448eead2cec74ae275";
const BASE_URL = "https://newsapi.org/v2";

export const fetchHeadlines = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        apiKey: API_KEY,
        page: page,
        q: "technology",
      },
    });
    return response.data.articles;
  } catch (error) {
    console.log(error, "Headline"); //  I wish to throw this error to the toast component
    throw error;
  }
};
