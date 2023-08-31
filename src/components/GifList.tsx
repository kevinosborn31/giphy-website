import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import GifListItem from './GifListItem';
import { Gif } from '../types/Gif';

interface IGifList {
  gifs: Gif[];
}

const GifList: FC<IGifList> = ({ gifs }) => {
  return (
    <Box>
      {gifs && gifs.length > 0 ? (
        gifs.map((gif: Gif) => (
          <GifListItem key={gif.id} gif={gif} />
        ))
      ) : (
        <Typography>No GIFs</Typography>
      )}
    </Box>
  );
};

export default GifList;
