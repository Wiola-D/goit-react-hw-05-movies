import { useEffect, useState } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../components/API';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const fetchedMovie = await getMovieDetails(id);
      console.log(fetchedMovie);
      setMovie(fetchedMovie);
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <>
      <div>
        {movie && (
          <div>
            <img src={movie.poster_path} alt={movie.title} />
            <h2>
              {movie.title} ({movie.release_date.split('-')[0]})
            </h2>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>

            <div>
              <h4>Genres</h4>
              <p>{movie.genres.map(genre => genre.name).join(' | ')}</p>
            </div>
          </div>
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
      </div>
      <Outlet />
    </>
  );
};
