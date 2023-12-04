const API_URL = () => {
  let api_url = '';
  if (process.env.REACT_APP_API_URL === undefined) {
    api_url = 'https://localhost:7048/api/';
  } else {
    api_url = process.env.REACT_APP_API_URL;
  }
  return api_url;
}

export default API_URL;
