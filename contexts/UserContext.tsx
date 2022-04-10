import React, {createContext, FC, useContext, useState} from 'react';
import {User} from '../api/types';

type UserContextState = [null, (user: User | null) => void];

const UserContext = createContext<UserContextState | null>(null);

export const UserContextProvider: FC = ({children}) => {
  const userState = useState<User | null>(null);
  return <UserContext.Provider value={userState}>{children}</UserContext.Provider>;
};

export const useUserState = () => {
  const userState = useContext(UserContext);
  if (!userState) {
    throw new Error('UserContext is not used');
  }
  return userState;
};
