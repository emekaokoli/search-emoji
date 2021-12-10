import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Card } from 'react-bootstrap';

const SearchResults = ({ data }) => {
  return (
    <Card style={{ width: '18rem', margin: '0 auto' }}>
      <ListGroup variant='flush' className='d-flex'>
        {data?.map((emoji, index) => (
          <ListGroup.Item key={index}>{emoji?.symbol}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};
export default SearchResults;

SearchResults.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
