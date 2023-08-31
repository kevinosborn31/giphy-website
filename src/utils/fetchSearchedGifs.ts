import axios from "axios";
import { GiphyEndpoints } from "../enum/GiphyEndpoints";

export const fetchSearchedGifs = async (searchTerm: string) => {
  if (!process.env.GIPHY_API_KEY) {
    throw new Error("Missing giphy api key");
  }
  try {
    const response = await axios.get(GiphyEndpoints.Search, {
      params: {
        api_key: process.env.GIPHY_API_KEY,
        q: searchTerm,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching searched gifs:", error);
    throw new Error("Error fetching searched gifs: " + error);
  }
};
