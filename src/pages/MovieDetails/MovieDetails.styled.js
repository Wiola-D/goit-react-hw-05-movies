import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  border-bottom: 1 ridge rgb(146, 41, 144, 0.6);
  padding-left: 70px;
  padding-bottom: 40px;
  padding-right: 70px;
  color: rgb(20, 20, 20);

  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const Title = styled.h2``;

export const Image = styled.img`
  border-radius: 6px;
  max-height: 350px;
  box-shadow: 0px 0px 5px 1px rgba(200, 200, 200, 1);
`;

export const Infos = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

export const Description = styled.div`
  margin-left: 20px;
  border-radius: 6px;
  padding: 18px;
  background-color: #e0e0e070;
  box-shadow: 0px 0px 5px 1px rgba(200, 200, 200, 1);

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 20px;
`;

export const Link = styled(NavLink)`
  padding: 4px 8px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 1px rgba(200, 200, 200, 1);
  text-decoration: none;
  color: rgb(20, 20, 20);
  font-weight: 600;

  &:visited {
    color: rgb(50, 50, 50);
  }

  &.active {
    text-decoration: 3px underline rgb(146, 41, 144, 0.6);
  }
  &:hover {
    box-shadow: inset 0px 0px 5px 1px rgba(200, 200, 200, 1);
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
`;

export const Overview = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
