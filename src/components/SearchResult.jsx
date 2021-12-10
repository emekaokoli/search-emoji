import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const SearchResults = ({ data }) => (
  <ListGroup>
    {data?.map(({ symbol }, index) => (
      <ListGroup.Item key={index}>{symbol}</ListGroup.Item>
    ))}
  </ListGroup>
);
export default SearchResults;

SearchResults.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
