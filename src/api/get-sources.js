// const languages = ['en', 'de', 'fr'];
// const countries = ['au', 'de', 'gb', 'in', 'it', 'us'];

const getSources = ({ category }) => {
  const url = `https://newsapi.org/v1/sources?category=${category}&language=en&country=us`;
  return fetch(url).then(response => response.json());
};

export default getSources;
