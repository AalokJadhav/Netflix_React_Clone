import Api from 'utils/api';

const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const tmdbApi = new Api({
  baseUrl: API_BASE,
  searchParams: { api_key: API_KEY },
});

export default tmdbApi;
