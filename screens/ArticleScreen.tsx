import React, {VFC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ArticleScreenRouteProp} from './types';

export const ArticleScreen: VFC = () => {
  const {params} = useRoute<ArticleScreenRouteProp>();
  return (
    <View style={styles.block}>
      <Text>{params.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});
