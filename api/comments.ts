import {client} from './client';
import {Comment} from './types';

export const getComments = async (articleId: number) => {
  const response = await client.get<Comment[]>(`/articles/${articleId}/comments`);
  return response.data;
};
