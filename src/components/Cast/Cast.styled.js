import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  color: rgb(200, 200, 200);

  @media (max-width: 500px) {
    margin: 0;
    margin-top: 10px;
  }
`;

export const Title = styled.h2`
  border-bottom: 1mm ridge rgb(146, 41, 144, 0.6);
  padding-bottom: 5px;
  text-align: center;
`;

export const Tbody = styled.tbody`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 550px) {
    margin: 0;
  }
`;
