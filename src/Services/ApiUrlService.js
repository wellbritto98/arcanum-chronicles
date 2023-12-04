const API_URL = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}/api/`; 
}

export default API_URL;
