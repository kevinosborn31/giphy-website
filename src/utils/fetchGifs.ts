import axios from 'axios';

export const fetchGifs = async () => {

    const apiKey = '3jx7BW9DuI4kWrEIM7BgRUTm4dbhTRfe'

  try {
    const response = await axios.get('https://api.giphy.com/v1/gifs/trending', {
        params: {
            apiKey: apiKey
        }
    });
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
  }
};
