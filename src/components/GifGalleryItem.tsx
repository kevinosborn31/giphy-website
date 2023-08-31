import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Gif } from '../types/Gif';

interface IGifGalleryItemProps {
    gif: Gif;
}

const GifGalleryItem: FC<IGifGalleryItemProps> = ({ gif }) => {

  return (
    <Box>
        <Typography>{gif.id}</Typography>
        <img src={gif.url} alt={gif.id} />
    </Box>
  );
};

export default GifGalleryItem;
