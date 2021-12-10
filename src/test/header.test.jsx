/* eslint-disable comma-dangle */
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../src/components/Header';

afterEach(cleanup);
test('"Ooloo" link points to the correct page', () => {
  render(
    <Router>
      <Header />
    </Router>,
  );

  fireEvent.click(screen.getByRole('link', { name: 'Emoji searching engine' }));

  expect(
    screen.getByRole('link', { name: 'Emoji searching engine' }),
  ).toBeInTheDocument();
});
