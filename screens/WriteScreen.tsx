import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState, VFC} from 'react';
import {KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RootStackNavigationProp} from './types';
import {writeArticle} from '../api/articles';
import {InfiniteData, useMutation, useQueryClient} from 'react-query';
import {Article} from '../api/types';

export const WriteScreen: VFC = () => {
  const {top} = useSafeAreaInsets();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigation = useNavigation<RootStackNavigationProp>();
  const queryClient = useQueryClient();
  // const articles = queryClient.getQueryData<Article[]>('articles') ?? [];
  const {mutate: write} = useMutation(writeArticle, {
    onSuccess(article) {
      // queryClient.invalidateQueries('articles');
      // queryClient.setQueryData<Article[]>('articles', articles => (articles ?? []).concat(article));
      queryClient.setQueryData<InfiniteData<Article[]>>('articles', data => {
        if (!data) {
          return {
            pageParams: [undefined],
            pages: [[article]],
          };
        }
        const [firstPage, ...rest] = data.pages;

        return {
          ...data,
          pages: [[article, ...firstPage], ...rest],
        };
      });
      navigation.goBack();
    },
  });
  const onSubmit = useCallback(() => {
    write({title, body});
  }, [write, title, body]);

  useEffect(() => {
    navigation.setOptions({
      headerRightContainerStyle: styles.headerRightContainer,
      headerRight: () => (
        <Pressable hitSlop={8} onPress={onSubmit} style={({pressed}) => pressed && styles.headerRightPressed}>
          <MaterialIcons name="send" color="#2196f3" size={24} />
        </Pressable>
      ),
    });
  }, [onSubmit, navigation]);

  return (
    <SafeAreaView style={styles.block} edges={['bottom']}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.select({ios: 'padding'})}
        keyboardVerticalOffset={Platform.select({ios: top + 60})}>
        <TextInput placeholder="제목" style={styles.input} value={title} onChangeText={setTitle} />
        <TextInput
          placeholder="내용"
          style={[styles.input, styles.body]}
          multiline
          textAlignVertical="top"
          value={body}
          onChangeText={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    fontSize: 14,
    lineHeight: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
  },
  body: {
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 16,
    flex: 1,
  },
  headerRightContainer: {
    marginRight: 16,
  },
  headerRightPressed: {
    opacity: 0.75,
  },
});
