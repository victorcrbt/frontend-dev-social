import axios from 'axios';

const api = axios.create({
  baseURL: 'https://windtech.dev/api',
});

export default api;
