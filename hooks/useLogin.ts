import {useMutation} from 'react-query';
import {login} from '../api/auth';
import {AuthError} from '../api/types';
import {useUserState} from '../contexts/UserContext';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../screens/types';
import {applyToken} from '../api/client';
import {authStorage} from '../api/storages/authStorage';

export const useLogin = () => {
  const [, setUser] = useUserState();
  const navigation = useNavigation<RootStackNavigationProp>();

  return useMutation(login, {
    onSuccess(data) {
      setUser(data.user);
      applyToken(data.jwt);
      authStorage.set(data);
      navigation.pop();
    },
    onError(error: AuthError) {
      console.error(error);
    },
  });
};
