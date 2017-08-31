const getSources = ({ source, apiKey }) => {
  const url = `https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`;
  return fetch(url).then(response => response.json());
};

export default getSources;
