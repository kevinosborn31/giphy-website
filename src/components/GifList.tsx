import { Box, CircularProgress, Typography } from '@mui/material';
import { FC } from 'react';
import GifListItem from './GifListItem';
import { Gif } from '../types/Gif';

interface IGifList {
  gifs: Gif[];
  isLoading: boolean;
  isError: boolean;
}

const GifList: FC<IGifList> = ({ gifs, isLoading, isError }) => {
  return (
    <Box display="flex" flexWrap="wrap">
    {isLoading && (
        <CircularProgress />
    )}        
    {isError && <Typography>Error fetching data</Typography>}
    {!isLoading && gifs && gifs.length === 0 && <Typography>No GIFs found</Typography>}
        {gifs.map((gif: Gif) => (
          <GifListItem gif={gif} />
        ))}
  </Box>
  );
};

export default GifList;
