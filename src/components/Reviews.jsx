import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from './API';

export const Reviews = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const fetchedMovie = await getMovieReviews(id);
      console.log(fetchedMovie);
      setMovie(fetchedMovie);
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <>
      <div>Reviews:</div>
      <table>
        <tbody>
          {movie &&
            movie.map(result => (
              <tr key={result.id}>
                <th>{result.author}</th>
                <td>{result.content}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
