import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from './API';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const fetchedMovie = await getMovieReviews(id);
      setReviews(fetchedMovie);
    };

    fetchMovieReviews();
  }, [id]);

  return (
    <>
      <div>Reviews:</div>
      {reviews && reviews.length > 0 ? (
        <table>
          <tbody>
            {reviews &&
              reviews.map(review => (
                <tr key={review.id}>
                  <th>{review.author}</th>
                  <td>{review.content}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div>We don't have any reviews for this movie </div>
      )}
    </>
  );
};
