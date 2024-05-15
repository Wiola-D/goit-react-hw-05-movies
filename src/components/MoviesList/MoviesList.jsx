import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../API';
import {
  Container,
  Title,
  Image,
  ListItem,
  List,
  Description,
} from './MovieList.styled';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  const [noResults, setNoResults] = useState(false);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (query) {
      fetchMovies(query);
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
      <List>
        {!noResults &&
          movies.map(movie => (
            <ListItem key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                <Image
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                />
                <Description>{movie.title}</Description>
              </Link>
            </ListItem>
          ))}
      </List>
    </Container>
  );
};
