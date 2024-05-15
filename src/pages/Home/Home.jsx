import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../components/API';
import {
  Container,
  Title,
  Image,
  ListItem,
  List,
  Description,
} from 'pages/Home/Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]); // stan z listą filmów popularnych
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrendingMovies(); // pobierz listę filmów z API
      setTrendingMovies(movies);
      console.log(movies); // ustaw listę filmów w stanie
    };

    fetchTrendingMovies(); // wywołaj funkcję pobierającą filmy po załadowaniu komponentu
  }, []); // pusta tablica oznacza, że useEffect wywoła się tylko raz po załadowaniu komponentu

  return (
    <Container>
      <Title>Trending today</Title>
      <List>
        {trendingMovies &&
          trendingMovies.length > 0 &&
          trendingMovies.map(movie => (
            <ListItem key={movie.id}>
              <Link to={`movies/${movie.id}`}>
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
export default Home;
