import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../components/API';

export const SearchMovies = () => {
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleInputChange = e => {
    setSearchInput(e.target.value);
    setNoResults(false); // reset noResults state when input changes
  };

  const onSubmit = async e => {
    e.preventDefault();

    const results = await searchMovies(searchInput);

    if (results.length === 0) {
      setMovies([]);
      setNoResults(true); // set noResults state to true if no movies were found
    } else {
      setMovies(results);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search for movies..."
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
      {noResults && <p>No movies found. Please try a different search term.</p>}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
