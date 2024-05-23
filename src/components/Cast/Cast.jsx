import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../API';
import { Container, Title, Tbody } from './Cast.styled';
import CastItem from 'components/CastItem/CastItem';

const Cast = () => {
  const { id } = useParams();
  const [casts, setCast] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const fetchedMovie = await getMovieCredits(id);
      setCast(fetchedMovie);
    };

    fetchMovieCast();
  }, [id]);

  return (
    <Container>
      <Title>Cast</Title>
      <table>
        <Tbody>
          {casts && casts.length > 0 ? (
            casts.map(cast => <CastItem key={cast.id} cast={cast} />)
          ) : (
            <div>We don't have cast for this movie </div>
          )}
        </Tbody>
      </table>
    </Container>
  );
};

export default Cast;
