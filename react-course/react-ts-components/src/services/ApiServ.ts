import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
  },
  params: {
    api_key: `a5f9c29429f3ee32204af9b3691e7d08`,
  },
});

export default ApiService;
