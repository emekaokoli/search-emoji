import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Searchbar } from './Searchbar';

export const Home = () => (
  <Container>
    <Row>
      <Col>
        <h1>Emoji search</h1>
        <Searchbar />
      </Col>
    </Row>
  </Container>
);

  