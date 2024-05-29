import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Logo, Movies } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo to="/">
          <img
            src={require('./icons8-movies-94.png')}
            alt="Movie Icon"
            width={50}
            height={50}
          />
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
