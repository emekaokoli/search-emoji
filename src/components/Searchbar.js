import React from 'react';
import { useHistory, useParams } from 'react-router';
import { getEmoji } from '../utils/getEmoji';
import { Container, Button, FormControl, Row, Col, ListGroup } from 'react-bootstrap';

export const Searchbar = () => {
  const history = useHistory();
  const emoji  = useParams();
  const [input, setInput] = React.useState();
  const [searchResult, setSearchResult] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const disable = !input || isLoading;

  console.log(`Searchbar: ${emoji}`);
   console.log(emoji);
  React.useEffect(() => {
    if (input) {
      history.push(`/search/${input}`);
    }
  }, [input, history]);

  const handleSubmit = async (e) => {
    if (input === '') return
    e.preventDefault();
    setIsLoading(true);
    const response = await getEmoji(input);
    console.log('response');
    console.log(response);
    setSearchResult(response);
    setIsLoading(false);
  };

  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={handleSubmit} className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search emoji'
              className='search'
              aria-label='Search'
              //value={search}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button variant='outline-success' type='submit' disabled={disable}>
              Search
            </Button>
          </form>

          {isLoading === true ? <div>Loading...</div> : null}
          {searchResult?.map(({ title, symbol, keywords }) => (
            <ListGroup key={title}>
              <ListGroup.Item>{title}</ListGroup.Item>
              <ListGroup.Item role='img' aria-label={symbol}>
                {symbol}
              </ListGroup.Item>
              <ListGroup.Item>{keywords}</ListGroup.Item>
              <ListGroup.Item>{keywords}</ListGroup.Item>
            </ListGroup>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
