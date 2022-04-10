import React, {useMemo} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useInfiniteQuery} from 'react-query';
import {getArticles} from '../api/articles';
import {Article} from '../api/types';
import {Articles} from '../components/Articles';
import {useUserState} from '../contexts/UserContext';

export const ArticlesScreen = () => {
  const {data, isFetchingNextPage, fetchNextPage} = useInfiniteQuery('articles', ({pageParam}) => getArticles({cursor: pageParam}), {
    getNextPageParam: lastPage => (lastPage.length === 10 ? lastPage[lastPage.length - 1].id : undefined),
  });
  const items = useMemo(() => {
    if (!data) {
      return null;
    }
    return ([] as Article[]).concat(...data.pages);
  }, [data]);
  const [user] = useUserState();

  if (!items) {
    return <ActivityIndicator size="large" style={styles.spinner} color="black" />;
  }

  return <Articles articles={items} showWriteButton={!!user} isFetchingNextPage={isFetchingNextPage} fetchNextPage={fetchNextPage} />;
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
  },
});
