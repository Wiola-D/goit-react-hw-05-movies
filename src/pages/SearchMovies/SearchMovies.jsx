import { MoviesList } from 'components/MoviesList/MoviesList';
import SearchBox from 'components/SearchBox/SearchBox';
import { Container } from 'pages/SearchMovies/SearchMoovies.styled';

const SearchMovies = () => {
  return (
    <Container>
      <SearchBox />
      <MoviesList />
    </Container>
  );
};
export default SearchMovies;
