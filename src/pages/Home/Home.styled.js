import styled from 'styled-components';

export const Container = styled.div`
  gap: 12px;
  padding: 8px 0;
  margin: 16px;
  border-bottom: 1mm ridge rgb(146, 41, 144, 0.6);
`;
export const Title = styled.h2`
  font-weight: 500;
  text-align: center;
  padding-bottom: 20px;
  color: lightgrey;
  text-shadow: 0 0 5px rgb(67, 182, 208);
`;
export const Image = styled.img`
  max-height: 300px;
  border-radius: 6px;
  padding-bottom: 12px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const ListItem = styled.li`
  height: 360px;
  width: 220px;
  box-shadow: 0px 0px 5px 1px rgba(105, 105, 105, 1);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
export const Description = styled.div`
  width: 200px;
  font-size:15px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 6px;
  }
`;
