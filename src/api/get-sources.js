// eslint-disable-next-line max-len
// const categories = ['business', 'entertainment', 'gaming', 'general', 'music', 'politics', 'science-and-nature', 'sport', 'technology'];
// const languages = ['en', 'de', 'fr'];
// const countries = ['au', 'de', 'gb', 'in', 'it', 'us'];

const getSources = ({ category = 'technology', language = 'en', country = 'us' }) => {
  const url = `https://newsapi.org/v1/sources?category=${category}&language=${language}&country=${country}`;
  return fetch(url)
    .then(response => (response.json()));
};

export default getSources;
