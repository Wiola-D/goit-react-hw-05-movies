import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from './API';

export const Cast = () => {
  const { id } = useParams();
  const [casts, setCast] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const fetchedMovie = await getMovieCredits(id);
      console.log(fetchedMovie);
      setCast(fetchedMovie);
    };

    fetchMovieCast();
  }, [id]);

  return (
    <>
      <div>Cast:</div>
      <table>
        <tbody>
          {casts &&
            casts.map((cast, index) => (
              <tr key={cast.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={cast.profile_path} alt="{cast.name}" />
                </td>
                <th>Name:</th>
                <td>{cast.name}</td>
                <th>Character:</th>
                <td>{cast.character}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
