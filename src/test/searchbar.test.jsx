import React from 'react';
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
import { cleanup } from '@testing-library/react';

import { getEmojiData } from '../utils/getEmojisData.js';

afterEach(cleanup);
beforeEach(() => {
  fetchMock.resetMocks();
});

const fakeLocalStorage = (() => {
  let store = { emoji: [] };

  return {
    getItem(key) {
      //return store[key] || null;
      return store[key] ?? null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

describe('storage', () => {
  enableFetchMocks();

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
      writable: true,
    });
  });

  it('gets the data from the storage', () => {
    const data = getEmojiData();

    expect(window.localStorage.getItem('the-key')).toEqual(data);
  });
});
