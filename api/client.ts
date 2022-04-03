import axios from 'axios';

console.log('__DEV__', __DEV__);
const baseURL = __DEV__ ? 'http://localhost:1337' : 'https://articles.example.com';

export const client = axios.create({
  baseURL,
});
