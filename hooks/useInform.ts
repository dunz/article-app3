import {useCallback} from 'react';
import {Alert, Platform, ToastAndroid} from 'react-native';

interface InformParams {
  title?: string;
  message: string;
}

export const useInform = () => {
  return useCallback(({title, message}: InformParams) => {
    if (Platform.OS === 'ios') {
      Alert.alert(title ?? '알림', message);
    } else {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  }, []);
};
