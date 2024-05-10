export const API_KEY = '8d0165c88a2a3719f86a4e8d625bec33';

export const getTrendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async query => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data.results;
};

export const getMovieCredits = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const getMovieReviews = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};
