import { Input, InputGroup, Button, Container } from './SearchBox.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query');
    setSearchQuery(queryParam || '');
  }, [searchParams]);

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Please enter a search phrase!');
    } else {
      setSearchParams({ query: searchQuery });
      setSearchQuery('');
    }
  };

  return (
    <Container>
      <InputGroup>
        <Button type="submit" onClick={handleSubmit}></Button>
        <Input
          id="myInput"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search for movies..."
        />
      </InputGroup>
    </Container>
  );
};

export default SearchBox;
