import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';
import { SearchMovies } from '../pages/SearchMovies';
import { SharedLayout } from './SharedLayout';
import { Reviews } from './Reviews';
import { Cast } from './Cast';
import { NotFound } from '../pages/NotFound';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/'); // Przekierowanie na stronę główną
  }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
