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
        <iframe src={gif.embed_url} />
    </Box>
  );
};

export default GifGalleryItem;
