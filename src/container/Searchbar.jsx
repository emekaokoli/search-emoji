import React, { useState, useEffect } from 'react';
import { Container, FormControl, Row, Col } from 'react-bootstrap';
import useDebounce from '../utils/useDebounce';
import SearchResults from '../components/SearchResult';
import { getEmojiData } from '../utils/getEmojisData';

const { emoji } = getEmojiData();
const initialState = emoji.slice(0, 10);

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState([...initialState]);
  const debouncedSearchTerm = useDebounce(searchText, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const results = emoji.filter((emoji) =>
        emoji.keywords.includes(debouncedSearchTerm),
      );
      setFilteredEmojis([...results]);
    }
  }, [debouncedSearchTerm]);

  return (
    <Container>
      <Row>
        <Col>
          <FormControl
            type='search'
            name={searchText}
            placeholder='Search emoji'
            className='search'
            aria-label='Search'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            data-testid='search-input'
          />
        </Col>
        {filteredEmojis?.length > 0 ? (
          <SearchResults data={filteredEmojis} />
        ) : (
          <p>No results found</p>
        )}
      </Row>
    </Container>
  );
};
export default Search;
