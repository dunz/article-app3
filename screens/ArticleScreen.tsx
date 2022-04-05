import React, {VFC} from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ArticleScreenRouteProp} from './types';
import {useQuery} from 'react-query';
import {getArticle} from '../api/articles';
import {getComments} from '../api/comments';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArticleView} from '../components/ArticleView';
import {CommentItem} from '../components/CommentItem';

export const ArticleScreen: VFC = () => {
  const {params} = useRoute<ArticleScreenRouteProp>();
  const {id} = params;

  const articleQuery = useQuery(['article', id], () => getArticle(id));
  const commentsQuery = useQuery(['comments', id], () => getComments(id));

  const {bottom} = useSafeAreaInsets();

  if (!articleQuery.data || !commentsQuery.data) {
    return <ActivityIndicator size="large" style={styles.spinner} color="black" />;
  }

  const {title, body, published_at, user} = articleQuery.data;

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={[styles.flatListContent, {paddingBottom: bottom}]}
      data={commentsQuery.data}
      renderItem={({item}) => (
        <CommentItem id={item.id} message={item.message} publishedAt={item.published_at} username={item.user.username} />
      )}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={<ArticleView title={title} body={body} publishedAt={published_at} username={user.username} />}
    />
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
  },
  flatList: {
    backgroundColor: 'white',
    flex: 1,
  },
  flatListContent: {
    paddingHorizontal: 12,
  },
});
