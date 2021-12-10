import * as React from 'react';
import { act } from 'react-dom/test-utils';
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  userEvent,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from '../container/Searchbar.jsx';
import { getEmoji } from '../utils/api.js';

afterEach(cleanup);
beforeEach(() => {
  fetchMock.resetMocks();
});
let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
const mockFn = jest.fn();

test('should have search input', () => {
  render(
    <Router>
      <Search handleSubmit={mockFn} />
    </Router>,
  );
  fireEvent.change(screen.getByTestId('search-input'), {
    target: { value: '1234' },
  });
  fireEvent.click(screen.getByTestId('search-button'));
  expect(mockFn).toHaveBeenCalled();

  //fireEvent.change(input, { target: { value: '2020-05-24' } });
});

// test('clicking the button triggers the onSubmit function', () => {
//   const handleSubmit = jest.fn();
//   render(<Search handleSubmit={handleSubmit} />);
//   fireEvent.click(screen.getByRole('button', { name: 'Search' }));
//   expect(handleSubmit).toHaveBeenCalled();
// });

// it('searches list of emojis', async (title) => {
//   enableFetchMocks();

//   //  Please note! I used "act" here because of the rerender behaviour of getEmoji()
//   //  please see https://reactjs.org/docs/test-utils.html#act for more info

//   await act(async () => {
//     await getEmoji();
//   });

//   fetchMock.mockResponseOnce(JSON.stringify({ data: [{ title: 'grinning' }] }));
//   const data = await getEmoji();
//   expect(data).toEqual({ data: [{ title: 'grinning' }] });
//   expect(fetch).toHaveBeenCalledTimes(2);
//   //expect(fetchMock.mock.calls.length).toEqual(1);
// });
