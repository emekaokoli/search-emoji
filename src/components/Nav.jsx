import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar bg='dark' variant='dark' expand='lg'>
    <Container>
      <Navbar.Brand>
        <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
          Emoji searching engine
        </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
);
export default Header;
