import {useMutation} from 'react-query';
import {register} from '../api/auth';
import {AuthError} from '../api/types';

export const useRegister = () => {
  return useMutation(register, {
    onSuccess(data) {
      console.log(data);
    },
    onError(error: AuthError) {
      console.error(error);
    },
  });
};
