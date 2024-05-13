import { Route, Routes, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';
import { SearchMovies } from '../pages/SearchMovies';
import { SharedLayout } from './SharedLayout';
import { Reviews } from './Reviews';
import { Cast } from './Cast';

const App = () => {
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
