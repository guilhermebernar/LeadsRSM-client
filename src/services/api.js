import axios from 'axios';

const api = axios.create({
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  credentials: 'same-origin',
  baseURL: 'http://localhost:5074',
  timeout: 5000,
});

export default api;