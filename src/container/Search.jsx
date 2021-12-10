import React, { useState, useEffect } from 'react';
import { Container, FormControl, Row, Col } from 'react-bootstrap';
import useDebounce from '../utils/useDebounce';
import SearchResults from '../components/SearchResult';
import { getEmojiData } from '../utils/getEmojisData';

const emoji = getEmojiData();
const initialState = emoji?.emoji?.slice(0, 10);

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState([...initialState]);
  const debouncedSearchTerm = useDebounce(searchText, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const results = emoji?.emoji?.filter((emoji) =>
        emoji?.keywords?.includes(debouncedSearchTerm),
      );
      setFilteredEmojis([...results]);
    }
  }, [debouncedSearchTerm]);

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col>
          <h1>Search Emoji</h1>
          <FormControl
            type='search'
            name={searchText}
            placeholder='Search emoji'
            className='search m-5'
            aria-label='Search'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            data-testid='search-input'
          />

          {filteredEmojis?.length > 0 ? (
            <Col>
              <SearchResults data={filteredEmojis} />
            </Col>
          ) : (
            <p>No results found</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default Search;
