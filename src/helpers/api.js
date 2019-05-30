import axios from 'axios';
import store from '../store';
import config from '../config';

const api = axios.create({
  baseURL: config.app.URL_API,
});

api.interceptors.request.use((config) => {
  let { token } = store.getState().session;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
