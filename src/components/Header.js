import React from 'react'
// import logo from '../logo.svg'
import { Navbar, Container } from 'react-bootstrap';

export const Header = () => (
  <Navbar bg='dark' variant='dark' expand='lg'>
    <Container>
      <Navbar.Brand href='#home'>
       Emoji searching engine
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls='search-navbar-nav' />
      <Navbar.Collapse id='search-navbar-nav'>
      </Navbar.Collapse> */}
    </Container>
  </Navbar>
);
