import { Description, Image, Table, Name } from './CastItem.styled';

const CastItem = ({ cast, index }) => {
  const defaultImg =
    'https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available.jpg';

  return (
    <Table key={cast.id}>
      <td>
        <Image
          src={
            cast.profile_path
              ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
              : defaultImg
          }
          alt={cast.name}
        />
      </td>
      <td>
        <Description>
          <div>
            <th>Name:</th>
            <Name>{cast.name}</Name>
          </div>
          <div>
            <th>Character:</th>
            <Name>{cast.character}</Name>
          </div>
        </Description>
      </td>
    </Table>
  );
};
export default CastItem;
