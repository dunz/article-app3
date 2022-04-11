import {useNavigation} from '@react-navigation/native';
import React, {VFC} from 'react';
import {RootStackNavigationProp} from '../screens/types';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export interface ArticleActionButtonsProps {
  articleId: number;
}

export const ArticleActionButtons: VFC<ArticleActionButtonsProps> = ({articleId}) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const onPressModify = () => {
    navigation.navigate('Write', {articleId});
  };
  const onPressRemove = () => {};
  return (
    <View style={styles.block}>
      <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPressModify}>
        <Text style={styles.buttonText}>수정</Text>
      </Pressable>
      <View style={styles.separator} />
      <Pressable onPress={onPressRemove} style={({pressed}) => pressed && styles.pressed}>
        <Text style={styles.buttonText}>삭제</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginTop: -16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  separator: {
    width: 8,
  },
  buttonText: {
    color: '#2196f3',
    fontSize: 14,
  },
  pressed: {
    opacity: 0.75,
  },
});
