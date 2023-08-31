import { Box, CircularProgress } from '@mui/material';
import GifGallery from '../GifGallery';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { Gif } from '../../types/Gif';
import { fetchSearchedGifs, fetchTrendingGifs } from '../../utils';
import SearchBar from '../SearchBar';

const HomePage = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const { isLoading: isLoadingSearchedGifs, isError: searchedGifError } = useQuery(
        ['gifs', searchTerm],
        () => fetchSearchedGifs(searchTerm),
        {
          onSuccess: (data) => {
            setGifs((prevGifs) => [...prevGifs, ...data]);
          },
        }
      );
    
      const { isLoading: isInitiallyLoading } = useQuery(
        'initialGifs',
        () => fetchTrendingGifs(),
        {
          enabled: true,
          onSuccess: (data) => {
            setGifs(data);  
          },
        }
      );

      useEffect(() => {
        setGifs([]);
      }, [searchTerm]);

      const handleSearch = (newSearchTerm: string) => {
        setSearchTerm(newSearchTerm); 
      };

  return (
    <Box>
        <SearchBar onSearch={handleSearch} />
        {isInitiallyLoading ? (
        <CircularProgress />
      ) : (
        <GifGallery gifs={gifs} isLoading={isLoadingSearchedGifs} isError={searchedGifError}/>
        )}
    </Box>
  );
};

export default HomePage;
