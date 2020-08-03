import config from '../config';

const URL_VIDEOS = `${config.URL_DATA}/videos`;

function create(videoObject) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (response) => {
      if (response.ok) {
        const myData = await response.json();
        return myData;
      }
      throw new Error('There was a problem with the server');
    });
}

export default {
  create,
};
