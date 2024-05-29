import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../components/API';
import BackLink from '../../components/BackLink';
import {
  Title,
  Container,
  Image,
  Infos,
  Description,
  DescriptionContainer,
  Link,
  Buttons,
  Overview,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const defaultImg =
    'https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available.jpg';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const fetchedMovie = await getMovieDetails(id);
      setMovie(fetchedMovie);
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <Container>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <DescriptionContainer>
        {movie && (
          <Infos>
            <Image
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
            />
            <Description>
              <Title>
                {movie.title} ({movie.release_date.split('-')[0]})
              </Title>
              <p>{movie.genres.map(genre => genre.name).join(' | ')}</p>
              <Overview>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </Overview>
              <p>User Score: {movie.vote_average * 10}%</p>
              <Buttons>
                <div key="cast">
                  <Link to={`cast`}>Cast</Link>
                </div>
                <div key="reviews">
                  <Link to={`reviews`}>Reviews</Link>
                </div>
              </Buttons>
            </Description>
          </Infos>
        )}
      </DescriptionContainer>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetails;
