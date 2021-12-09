import React from 'react';
import { useHistory, useParams, useLocation } from 'react-router';
import {
  Container,
  Button,
  FormControl,
  Row,
  Col,
  ListGroup,
} from 'react-bootstrap';

export const Searchbar = () => {
  const history = useHistory();
  const { emojiId } = useParams();
  const {pathname} = useLocation();
  const componentMounted = React.useRef(true);
  const [input, setInput] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const disable = !input || isLoading;
  console.log(emojiId);

  const getEmoji = async (data) =>
    fetch(`http://localhost:3001/emoji/${data}`)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => {
        console.log(err);
      });

  React.useEffect(() => {
    setIsLoading(true);

    const fetchData = () => {
      getEmoji(input)
        .then((res) => {
          if (componentMounted.current) {
            // is component still mounted?
            setSearchResult(res); // (1) write data to state
          }
        })
        .catch((err) => setError(err.message))
        .finally(
          () => setIsLoading(false), // (2) write some value to state
        );
    };
    fetchData();
    return () => {
      // This code runs when component is unmounted
      componentMounted.current = false; //(4) set it to false when we leave the page
    };
  }, [input]);

  const handleSubmit = (e) => {

    if (input === '') return;
    e.preventDefault();
    history.push({
      pathname,
      search: `?q=${input}`,
    });
  };

  const handleChange = (e) => {
    e.persist();
    setInput(e.target.value);
  };
 
  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={handleSubmit} className='d-flex'>
            <FormControl
              type='search'
              name={input}
              placeholder='Search emoji'
              className='search'
              aria-label='Search'
              value={input}
              onChange={handleChange}
            />
            <Button variant='outline-success' type='submit' disabled={disable} className='m-1'>
              Search
            </Button>
          </form>

          {isLoading === true ? (
            <div>Loading...</div>
          ) : (
            !error &&
            searchResult?.map(({ title, symbol, keywords }) => (
              <ListGroup key={title}>
                {/* <ListGroup.Item>{title}</ListGroup.Item> */}
                <ListGroup.Item
                  role='img'
                  aria-label={symbol}
                  className='text-center mt-5'
                  style={{border:'none'}}
                >
                  {symbol}
                </ListGroup.Item>
                {/* <ListGroup.Item>{keywords}</ListGroup.Item> */}
              </ListGroup>
            ))
          )}
          {error && <div>an error has occuured {error}</div>}
        </Col>
      </Row>
    </Container>
  );
};
