import axios from 'axios';

const baseURL = __DEV__ ? 'http://localhost:1337' : 'https://articles.example.com';

export const client = axios.create({
  baseURL,
});

export const applyToken = (jwt: string) => {
  client.defaults.headers.Authorization = `Bearer ${jwt}`;
};

export const clearToken = () => {
  client.defaults.headers.Authorization = undefined;
};
