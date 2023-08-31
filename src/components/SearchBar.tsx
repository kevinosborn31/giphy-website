import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ margin: 2 }}
    >
      <TextField
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search gifs..."
        variant="outlined"
        size="small"
        sx={{ marginRight: "8px", width: "500px" }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
