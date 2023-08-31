import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Box sx={{ margin: 2 }}>
      <TextField
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
  