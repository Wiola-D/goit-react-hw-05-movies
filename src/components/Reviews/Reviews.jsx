import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../API';
import { Container, Title, Table } from 'components/Reviews/Reviews.styled';

const Reviews = () => {
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
    <Container>
      <Title>Reviews:</Title>
      {reviews && reviews.length > 0 ? (
        <table>
          <tbody>
            {reviews &&
              reviews.map(review => (
                <Table key={review.id}>
                  <th>{review.author}</th>
                  <td>{review.content}</td>
                </Table>
              ))}
          </tbody>
        </table>
      ) : (
        <div>We don't have any reviews for this movie </div>
      )}
    </Container>
  );
};
export default Reviews;
