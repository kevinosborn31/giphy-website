import axios from 'axios';

export const fetchGifs = async () => {

  try {
    const response = await axios.get('api.giphy.com/v1/gifs/trending', {
        params: {
            apiKey: '3jx7BW9DuI4kWrEIM7BgRUTm4dbhTRfe'
        }
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};
