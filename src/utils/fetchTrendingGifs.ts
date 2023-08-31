import axios from "axios";
import { GiphyEndpoints } from "../enum/GiphyEndpoints";

export const fetchTrendingGifs = async () => {
  if (!process.env.GIPHY_API_KEY) {
    throw new Error("Missing giphy api key");
  }
  try {
    const response = await axios.get(GiphyEndpoints.Trending, {
      params: {
        api_key: process.env.GIPHY_API_KEY,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching trending gifs:", error);
    throw new Error("Error fetching trending gifs: " + error);
  }
};
