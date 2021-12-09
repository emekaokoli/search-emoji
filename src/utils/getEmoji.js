import { baseUrl } from '../constants/baseUrl';

export const getEmoji = (title) => {
  fetch(`${baseUrl}title`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};