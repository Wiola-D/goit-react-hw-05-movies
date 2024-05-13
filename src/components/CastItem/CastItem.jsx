import { Description, Image, Table } from './CastItem.styled';

const CastItem = ({ cast, index }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
            <td>{cast.name}</td>
          </div>
          <div>
            <th>Character:</th>
            <td>{cast.character}</td>
          </div>
        </Description>
      </td>
    </Table>
  );
};
export default CastItem;
