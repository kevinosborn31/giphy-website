import axios from 'axios';
import { GiphyEndpoints } from '../enum/GiphyEndpoints';

const apiKey = 'gqST0uP33o0dSjeGdUOkDLPE4uiJMuLa';

export const fetchSearchedGifs = async (searchTerm: string) => {

  try {
    const response = await axios.get(GiphyEndpoints.Search, {
        params: {
          api_key: apiKey,
          q: searchTerm,
        },
      });
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
