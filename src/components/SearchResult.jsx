import { useState } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Card, Pagination, Container } from 'react-bootstrap';

const SearchResults = ({ data }) => {
  const [pageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * pageSize;
  const indexOfFirstPost = indexOfLastPost - pageSize;
  const currentEmoji = data.slice(indexOfFirstPost, indexOfLastPost);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === Math.ceil(data.length / pageSize);
  const totalItems = data.length;
  const PaginatedItems = currentEmoji.length;

  const handleLastPage = () => {
    if (!isLastPage) {
      return setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (!isFirstPage) {
      return setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      return setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    if (!isFirstPage) {
      return setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        width: 'auto',
        margin: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className='px-4'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container>
          <div className='d-flex text-center'>
            <p className='m-1'>total items: {totalItems}</p>
            <p className='m-1'>Paginated items: {PaginatedItems}</p>
          </div>
          <ListGroup style={{ width: '15rem' }}>
            {currentEmoji.map((emoji) => {
              const { title, symbol, keywords } = emoji;
              return (
                <ListGroup.Item key={title}>
                  <Card style={{ margin: '0 auto' }}>
                    <Card.Title>{keywords}</Card.Title>
                    <Card.Body>
                      <p>{symbol}</p>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <Pagination>
            <Pagination.First onClick={() => handleFirstPage()} />
            <Pagination.Prev onClick={() => handlePreviousPage()} />
            <Pagination.Item active={currentPage}>
              {currentPage}
            </Pagination.Item>
            <Pagination.Next onClick={() => handleNextPage()} />
            <Pagination.Last onClick={() => handleLastPage()} />
          </Pagination>
        </Container>
      </div>
    </div>
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
