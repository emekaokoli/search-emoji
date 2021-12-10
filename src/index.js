import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import emojis from '../src/data/emoji.json'; 

export const loadEmojis = () => {
  if (localStorage.getItem('emojis') === null) {
    localStorage.setItem('emojis', JSON.stringify(emojis));
  }
}
loadEmojis();

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
