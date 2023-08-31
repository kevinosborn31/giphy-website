import { Box } from '@mui/material';
import { FC } from 'react';
import GifListItem from './GifListItem';
import { Gif } from '../types/Gif';

interface IGifList {
  gifs: Gif[];
}

const GifList: FC<IGifList> = ({ gifs }) => {
  return (
    <Box>
      {gifs.map((gif: Gif) => (
        <GifListItem gif={gif} /> 
      ))}
    </Box>
  );
};

export default GifList;
