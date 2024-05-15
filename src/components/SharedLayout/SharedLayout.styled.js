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
  border-bottom: 2mm ridge rgba(211, 220, 50, 0.6);

  > nav {
    display: flex;
  }
`;

export const Logo = styled.div`
  font-weight: 700;
  margin: 0;
  display: flex;
  gap: 20px;
`;

export const Movies = styled.div`
  font-size: 30px;
`;
export const Link = styled(NavLink)`
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 600;

  &.active {
    color: white;
    background-color: darkviolet;
  }
`;
