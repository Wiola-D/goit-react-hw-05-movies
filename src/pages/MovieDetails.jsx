import { useEffect, useState } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { API_KEY } from '../components/API';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      const fetchedMovie = await response.json();
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
            <h2>{movie.title}</h2>
            <p>User Score: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>

            <div>
              <h4>Genres</h4>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
        )}
        <div>
          <p>Additional information</p>
          {movie && (
            <ul>
              <li key={movie.id}>
                <Link to={`reviews`}>reviews</Link>
              </li>
              <li key={movie.id}>
                <Link to={`cast`}>cast</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
