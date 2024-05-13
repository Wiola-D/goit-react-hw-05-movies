import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../components/API';
import { Container, Title } from 'pages/Home/Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]); // stan z listą filmów popularnych

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrendingMovies(); // pobierz listę filmów z API
      setTrendingMovies(movies); // ustaw listę filmów w stanie
    };

    fetchTrendingMovies(); // wywołaj funkcję pobierającą filmy po załadowaniu komponentu
  }, []); // pusta tablica oznacza, że useEffect wywoła się tylko raz po załadowaniu komponentu

  return (
    <Container>
      <Title>Trending today</Title>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default Home;
