import {useMutation} from 'react-query';
import {login} from '../api/auth';
import {AuthError} from '../api/types';

export const useLogin = () => {
  return useMutation(login, {
    onSuccess(data) {
      console.log(data);
    },
    onError(error: AuthError) {
      console.error(error);
    },
  });
};
