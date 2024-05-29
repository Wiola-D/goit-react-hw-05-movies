import styled from 'styled-components';
export const Image = styled.img`
  max-height: 120px;
  border-radius: 6px;
`;

export const Table = styled.tr`
  box-shadow: 0px 0px 7px 1px rgba(205, 205, 205, 1);
  border-radius: 6px;
  width: 280px;
  padding: 5px;
  background: rgba(0, 0, 0, 0.6);

  @media (max-width: 550px) {
    width: 200px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 5px;
  color: lightgrey;
`;

export const Name = styled.td`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 15px;
  padding-bottom: 9px;
`;
