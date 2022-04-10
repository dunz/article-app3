import {useMutation} from 'react-query';
import {login} from '../api/auth';
import {AuthError} from '../api/types';
import {useUserState} from '../contexts/UserContext';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../screens/types';
import {applyToken} from '../api/client';
import {authStorage} from '../api/storages/authStorage';
import {useInform} from './useInform';

export const useLogin = () => {
  const [, setUser] = useUserState();
  const navigation = useNavigation<RootStackNavigationProp>();
  const inform = useInform();

  return useMutation(login, {
    onSuccess(data) {
      setUser(data.user);
      applyToken(data.jwt);
      authStorage.set(data);
      navigation.pop();
    },
    onError(error: AuthError) {
      const message = error?.response?.data?.data?.[0]?.messages[0].message ?? '로그인 실패';
      inform({
        title: '오류',
        message,
      });
    },
  });
};
