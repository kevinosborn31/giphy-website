import { Box } from '@mui/material';
import GifList from '../GifList';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { Gif } from '../../types/Gif';
import { fetchGifs } from '../../utils/fetchGifs';

const HomePage = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);

    const { isLoading, isError } = useQuery(
        'gifs',
        () => fetchGifs(),
        {
          enabled: true,
          onSuccess: (data) => {
            setGifs(data);  
          },
        }
      );

      console.log(gifs);

  return (
    <Box>
        <GifList gifs={gifs} isLoading={isLoading} isError={isError}/>
    </Box>
  );
};

export default HomePage;
