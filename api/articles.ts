import {client} from './client';
import {Article} from './types';

export const getArticles = async () => {
  const response = await client.get<Article[]>('/articles');
  return response.data;
};

export const getArticle = async (id: number) => {
  const response = await client.get<Article>(`/articles/${id}`);
  return response.data;
};
