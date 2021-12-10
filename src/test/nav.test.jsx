/* eslint-disable comma-dangle */
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../components/Nav';

afterEach(cleanup);
test('link points to the correct page', () => {
  render(
    <Router>
      <Nav />
    </Router>,
  );

  fireEvent.click(screen.getByRole('link', { name: 'Emoji searching engine' }));

  expect(
    screen.getByRole('link', { name: 'Emoji searching engine' }),
  ).toBeInTheDocument();
});
