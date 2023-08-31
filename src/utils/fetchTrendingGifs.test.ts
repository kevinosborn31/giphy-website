import axios from "axios";
import { fetchTrendingGifs } from "./fetchTrendingGifs"; 
import { GiphyEndpoints } from "../enum/GiphyEndpoints";

jest.mock("axios");

describe("fetchTrendingGifs", () => {
  it("fetches trending gifs successfully", async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: {
        data: ["gif1", "gif2"], 
      },
    });

    const gifs = await fetchTrendingGifs();

    expect(gifs).toEqual(["gif1", "gif2"]);
    expect(axios.get).toHaveBeenCalledWith(GiphyEndpoints.Trending, {
      params: {
        api_key: process.env.GIPHY_API_KEY,
      },
    });
  });

  it("handles errors when fetching trending gifs", async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error("Network error"));

    await expect(fetchTrendingGifs()).rejects.toThrowError(
      "Error fetching trending gifs: Network error"
    );
  });
});
