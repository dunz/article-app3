import axios from 'axios';

const baseURL = __DEV__ ? 'http://localhost:1337' : 'https://articles.example.com';

export const client = axios.create({
  baseURL,
});
