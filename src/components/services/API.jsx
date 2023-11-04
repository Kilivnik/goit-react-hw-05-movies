import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '4c250d742d3fa1acbadc30066c33a3e2';

export async function fetchTrendingMovies() {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchSearchMovie(search, page) {
  const response = await axios.get(
    `/search/movie?${API_KEY}&query=${search}&page=${page}`
  );
  return response.data;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchMovieCredits(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits?${API_KEY}`);
  return response.data;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews?${API_KEY}`);
  return response.data;
}
