import React, { useState, useEffect } from 'react';
import { Container, FormControl, Row, Col } from 'react-bootstrap';
import useDebounce from '../utils/useDebounce';
import SearchResults from '../components/SearchResult';
import { getEmojiData } from '../utils/getEmojisData';

const emoji = getEmojiData();
const initialState = emoji?.slice(0, 10) || []; //defensive programming by adding empty array if undefined or all fails;

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState([...initialState]);
  const debouncedSearch = useDebounce(searchText, 500);

  useEffect(() => {
    if (debouncedSearch) {
      const results = emoji?.filter((emoji) =>
        emoji?.keywords?.includes(debouncedSearch),
      );
      setFilteredEmojis([...results]?.slice(0, 10) || []);
    }
  }, [debouncedSearch]);

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
            aria-label='Search box'
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
