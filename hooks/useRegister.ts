import {useMutation} from 'react-query';
import {register} from '../api/auth';
import {AuthError} from '../api/types';
import {useUserState} from '../contexts/UserContext';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../screens/types';
import {applyToken} from '../api/client';

export const useRegister = () => {
  const [, setUser] = useUserState();
  const navigation = useNavigation<RootStackNavigationProp>();

  return useMutation(register, {
    onSuccess(data) {
      setUser(data.user);
      applyToken(data.jwt);
      navigation.pop();
    },
    onError(error: AuthError) {
      console.error(error);
    },
  });
};
