import axios from "axios";
import { fetchSearchedGifs } from "./fetchSearchedGifs"; 
import { GiphyEndpoints } from "../enum/GiphyEndpoints";

jest.mock("axios");

describe("fetchSearchedGifs", () => {
  it("fetches searched gifs successfully", async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: {
        data: ["gif3", "gif4"], 
      },
    });

    const gifs = await fetchSearchedGifs("cats"); 

    expect(gifs).toEqual(["gif3", "gif4"]);
    expect(axios.get).toHaveBeenCalledWith(GiphyEndpoints.Search, {
      params: {
        api_key: process.env.GIPHY_API_KEY,
        q: "cats", 
      },
    });
  });

  it("handles errors when fetching searched gifs", async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error("Search error"));

    await expect(fetchSearchedGifs("dogs")).rejects.toThrowError(
      "Error fetching searched gifs: Search error"
    );
  });
});
