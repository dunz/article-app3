import React, {VFC} from 'react';
import {Article} from '../api/types';
import {FlatList, StyleSheet, View} from 'react-native';
import {ArticleItem} from './ArticleItem';

export interface ArticlesProps {
  articles: Article[];
}

export const Articles: VFC<ArticlesProps> = ({articles}) => {
  return (
    <FlatList
      data={articles}
      renderItem={({item}) => <ArticleItem id={item.id} title={item.title} publishedAt={item.published_at} username={item.user.username} />}
      keyExtractor={item => item.id.toString()}
      style={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => (articles.length > 0 ? <View style={styles.separator} /> : null)}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#cfd8dc',
  },
});
