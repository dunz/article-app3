import {client} from './client';
import {Article} from './types';

export const getArticles = async () => {
  const response = await client.get<Article[]>('articles');
  return response.data;
};
