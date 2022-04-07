import {AxiosError} from 'axios';

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: null | boolean;
  role: number;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: number;
  title: string;
  body: string;
  user: User;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: number;
  message: string;
  user: User;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface AuthResult {
  jwt: string;
  user: User;
}

type AuthErrorData = {
  messages: {
    id: string;
    message: string;
  }[];
}[];

// interface ErrorObject {
//   id: string;
//   message: string;
// }
//
// interface AuthErrorData {
//   messages: ErrorObject[];
// }

export type AuthError = AxiosError<{
  statusCode: number;
  error: string;
  // message: AuthErrorData[];
  // data: AuthErrorData[];
  message: AuthErrorData;
  data: AuthErrorData;
}>;
