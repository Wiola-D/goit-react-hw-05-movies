import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 980px
  min-width: 320px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin: 16px;
  padding-right: 40px;
  padding-left: 40px;
  border-bottom: 1.2mm ridge rgb(146, 41, 144, 0.6);

  > nav {
    display: flex;
  }
`;

export const Logo = styled(NavLink)`
  font-weight: 400;
  margin: 0;
  display: flex;
  gap: 20px;
`;

export const Movies = styled.div`
  font-size: 40px;
  color: lightgrey;
  text-shadow: 0 0 5px rgb(67, 182, 208);

  @media (max-width: 500px) {
    display: none;
  }
`;
export const Link = styled(NavLink)`
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 400;

  &.active {
    text-decoration: 3px underline rgb(146, 41, 144, 0.6);
  }
  &:hover {
    color: rgb(146, 41, 144, 0.6);
  }
  &:focus {
    color: rgb(146, 41, 144, 0.6);
  }
`;
