import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  color: rgb(200, 200, 200);
`;

export const Title = styled.h2`
  border-bottom: 1mm ridge rgb(146, 41, 144, 0.6);
  padding-bottom: 5px;
  text-align: center;
`;

export const Table = styled.tr`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: 0px 0px 7px 1px rgba(205, 205, 205, 1);
  border-radius: 6px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.6);
  font-size: 13px;

  > th {
    text-align: left;
    font-size: 18px;
    margin-bottom: 4px;
  }
`;

export const Data = styled.td`
  text-align: right;
`;
