import React, {VFC} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainTabNavigationProp} from '../screens/types';

export interface ArticleItemProps {
  id: number;
  title: string;
  publishedAt: string;
  username: string;
}
export const ArticleItem: VFC<ArticleItemProps> = ({id, title, publishedAt, username}) => {
  const navigation = useNavigation<MainTabNavigationProp>();
  const onPress = () => {
    navigation.navigate('Article', {id});
  };
  const formattedDate = new Date(publishedAt).toLocaleString();

  return (
    <Pressable
      style={({pressed}) => [styles.block, Platform.OS === 'ios' && pressed && styles.pressed]}
      onPress={onPress}
      android_ripple={{color: '#eee'}}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.footer}>
        <Text style={styles.smallText}>{username}</Text>
        <Text style={styles.smallText}>{formattedDate}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  pressed: {
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 16,
  },
  smallText: {
    fontSize: 10,
    color: '#546e7a',
  },
});
