import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../API';
import { Container, Title } from './MovieList.styled';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (query) {
      fetchMovies(query);
      console.log(query);
    } else {
      setMovies([]);
    }
  }, [query]);

  const fetchMovies = async query => {
    const results = await searchMovies(query);
    if (results.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
      setMovies(results);
    }
  };

  return (
    <Container>
      {noResults && <p>No movies found. Please try a different search term.</p>}
      {!noResults && query && <Title>Search Results:</Title>}
      <ul>
        {!noResults &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </Container>
  );
};
