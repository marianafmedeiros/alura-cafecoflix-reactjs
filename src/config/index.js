const URL_DATA = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://cafecoflix.herokuapp.com';

export default {
  URL_DATA,
};
