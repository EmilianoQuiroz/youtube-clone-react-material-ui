import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    await axios.get(`${BASE_URL}/${url}`, options);
  }