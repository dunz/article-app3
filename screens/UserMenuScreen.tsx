import {useNavigation} from '@react-navigation/native';
import React, {VFC} from 'react';
import {View} from 'react-native';
import {MenuItem} from '../components/MenuItem';
import {RootStackNavigationProp} from './types';

export const UserMenuScreen: VFC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onLogin = () => navigation.navigate('Login');
  const onRegister = () => navigation.navigate('Register');

  return (
    <View>
      <MenuItem onPress={onLogin} name="로그인" />
      <MenuItem onPress={onRegister} name="회원가입" />
    </View>
  );
};
