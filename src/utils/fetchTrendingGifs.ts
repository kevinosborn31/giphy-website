import axios from 'axios';
import { GiphyEndpoints } from '../enum/GiphyEndpoints';

const apiKey = 'gqST0uP33o0dSjeGdUOkDLPE4uiJMuLa';

export const fetchTrendingGifs = async () => {

  try {
    const response = await axios.get(GiphyEndpoints.Trending, {
      params: {
        api_key: apiKey,
      }});
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
