import axios from 'axios';

const baseURL = 'https://api.dictionaryapi.dev';

const config = {
  baseURL,
};

const api = axios.create(config);

export default api;
