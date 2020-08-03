import config from '../config';

const URL_CATEGORIES = `${config.URL_DATA}/categories`;

function getAllCategories() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const myData = await response.json();
        return myData;
      }
      throw new Error('There was a problem with the server');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const myData = await response.json();
        return myData;
      }
      throw new Error('There was a problem with the server');
    });
}

export default {
  getAllWithVideos,
  getAllCategories,
};
