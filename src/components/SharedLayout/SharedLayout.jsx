import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import movieIcon from 'svg/movie.svg';
import { Container, Header, Link, Logo, Movies } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src={movieIcon} alt="Movie Icon" />
          <Movies> Movies</Movies>
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedLayout;
