import { Box } from '@mui/material';
import { FC } from 'react';
import { Gif } from '../types/Gif';

interface IGifListItem {
    gif: Gif;
}

const GifListItem: FC<IGifListItem> = ({ gif }) => {

  return (
    <Box>
        GifListItem
    </Box>
  );
};

export default GifListItem;
