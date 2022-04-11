import {client} from './client';
import {Comment} from './types';

export const getComments = async (articleId: number) => {
  const response = await client.get<Comment[]>(`/articles/${articleId}/comments`);
  return response.data;
};

export const writeComment = async (params: {articleId: number; message: string}) => {
  const {articleId, message} = params;
  const response = await client.post<Comment>(`/articles/${articleId}/comments`, {message});
  return response.data;
};

export const modifyComment = async (params: {articleId: number; message: string; id: number}) => {
  const {articleId, message, id} = params;
  const response = await client.put<Comment>(`/articles/${articleId}/comments/${id}`, {message});
  return response.data;
};

export const deleteComment = async (params: {articleId: number; id: number}) => {
  const {articleId, id} = params;
  await client.delete<Comment>(`/articles/${articleId}/comments/${id}`);
  return null;
};
