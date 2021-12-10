import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import Home from '../components/Home';

afterEach(cleanup);

it('Should have search emoji text', async () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('search-emoji')).toHaveTextContent('Emoji search');
});
