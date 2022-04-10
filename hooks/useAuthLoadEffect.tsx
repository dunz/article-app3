import {useUserState} from '../contexts/UserContext';
import {useEffect} from 'react';
import {authStorage} from '../api/storages/authStorage';
import {applyToken} from '../api/client';

export const useAuthLoadEffect = () => {
  const [, setUser] = useUserState();

  useEffect(() => {
    const fn = async () => {
      const auth = await authStorage.get();
      if (!auth) {
        return;
      }
      setUser(auth.user);
      applyToken(auth.jwt);
    };
    fn();
  }, [setUser]);
};
