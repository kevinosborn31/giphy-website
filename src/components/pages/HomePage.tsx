import { Box, CircularProgress, Typography } from "@mui/material";
import GifGallery from "../GifGallery";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { Gif } from "../../types/Gif";
import { fetchSearchedGifs, fetchTrendingGifs } from "../../utils";
import SearchBar from "../SearchBar";

const HomePage = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading: isLoadingSearchedGifs, isError: searchedGifError } =
    useQuery(["gifs", searchTerm], () => fetchSearchedGifs(searchTerm), {
      onSuccess: (data) => {
        setGifs((prevGifs) => [...prevGifs, ...data]);
      },
    });

  const { isLoading: isInitiallyLoading } = useQuery(
    "initialGifs",
    () => fetchTrendingGifs(),
    {
      enabled: true,
      onSuccess: (data) => {
        setGifs(data);
      },
    }
  );

  useEffect(() => {
    setGifs([]);
  }, [searchTerm]);

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 2 }}>
        Welcome to my secret GIF collection
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {isInitiallyLoading ? (
        <CircularProgress size={150} thickness={4} />
      ) : (
        <GifGallery
          gifs={gifs}
          isLoading={isLoadingSearchedGifs}
          isError={searchedGifError}
        />
      )}
    </Box>
  );
};

export default HomePage;
