import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Gif } from '../types/Gif';

interface IGifListItem {
    gif: Gif;
}

const GifListItem: FC<IGifListItem> = ({ gif }) => {

  return (
    <Box>
        <Typography>{gif.id}</Typography>
        <img src={gif.url} alt={gif.id} />
    </Box>
  );
};

export default GifListItem;
