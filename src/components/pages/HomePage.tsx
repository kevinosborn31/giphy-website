import { Box } from '@mui/material';
import GifList from '../GifList';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { Gif } from '../../types/Gif';
import { fetchGifs } from '../../utils/fetchGifs';

const HomePage = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);

    useQuery(
        'gifs',
        () => fetchGifs(),
        {
          enabled: true,
          onSuccess: (data) => {
            setGifs(data);  
          },
        }
      );

  return (
    <Box>
        <GifList gifs={gifs}/>
    </Box>
  );
};

export default HomePage;
