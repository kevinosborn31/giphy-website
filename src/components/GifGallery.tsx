import { Box, CircularProgress, Typography } from "@mui/material";
import { FC } from "react";
import GifGalleryItem from "./GifGalleryItem";
import { Gif } from "../types/Gif";

interface IGifGalleryProps {
  gifs: Gif[];
  isLoading: boolean;
  isError: boolean;
}

const GifGallery: FC<IGifGalleryProps> = ({ gifs, isLoading, isError }) => {
  return (
    <Box display="flex" flexWrap="wrap">
      {isLoading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          data-testid="loading-state"
        >
          <CircularProgress size={150} thickness={4} />
        </Box>
      )}
      {isError && <Typography>Error fetching data</Typography>}
      {!isLoading && gifs && gifs.length === 0 && (
        <Typography>No GIFs found</Typography>
      )}
      {gifs.map((gif: Gif) => (
        <GifGalleryItem gif={gif} />
      ))}
    </Box>
  );
};

export default GifGallery;
