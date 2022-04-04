import React, {VFC} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ArticleScreenRouteProp} from './types';
import {useQuery} from 'react-query';
import {getArticle} from '../api/articles';
import {getComments} from '../api/comments';

export const ArticleScreen: VFC = () => {
  const {params} = useRoute<ArticleScreenRouteProp>();
  const {id} = params;

  const articleQuery = useQuery(['article', id], () => getArticle(id));
  const commentsQuery = useQuery(['comments', id], () => getComments(id));

  if (!articleQuery.data || !commentsQuery.data) {
    return <ActivityIndicator size="large" style={styles.spinner} color="black" />;
  }

  return (
    <View>
      <Text>{articleQuery.data.title}</Text>
      <Text>{articleQuery.data.body}</Text>
      <Text>{commentsQuery.data.length}개의 댓글</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
  },
});
