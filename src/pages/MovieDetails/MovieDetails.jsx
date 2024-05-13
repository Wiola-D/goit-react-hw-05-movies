import { useEffect, useState, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../components/API';
import BackLink from '../../components/BackLink';
import {
  Title,
  Container,
  Image,
  Infos,
  Description,
  DescriptionContainer,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
              <p>User Score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>

              <div>
                <h4>Genres</h4>
                <p>{movie.genres.map(genre => genre.name).join(' | ')}</p>
              </div>
            </Description>
          </Infos>
        )}
        <div>
          <h4>Additional information</h4>
          {movie && (
            <ul>
              <li key="cast">
                <Link to={`cast`}>Cast</Link>
              </li>
              <li key="reviews">
                <Link to={`reviews`}>Reviews</Link>
              </li>
            </ul>
          )}
        </div>
      </DescriptionContainer>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetails;
