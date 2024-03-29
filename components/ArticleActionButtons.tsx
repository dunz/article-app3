import {useNavigation} from '@react-navigation/native';
import React, {useState, VFC} from 'react';
import {RootStackNavigationProp} from '../screens/types';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {AskDialog} from './AskDialog';
import {InfiniteData, useMutation, useQueryClient} from 'react-query';
import {deleteArticle} from '../api/articles';
import {Article} from '../api/types';

export interface ArticleActionButtonsProps {
  articleId: number;
}

export const ArticleActionButtons: VFC<ArticleActionButtonsProps> = ({articleId}) => {
  const [askRemove, setAskRemove] = useState(false);
  const navigation = useNavigation<RootStackNavigationProp>();
  const queryClient = useQueryClient();

  const {mutate} = useMutation(deleteArticle, {
    onSuccess() {
      navigation.goBack();
      queryClient.setQueryData<InfiniteData<Article[]>>('articles', data => {
        if (!data) {
          return {pagesParams: [], pages: []};
        }
        return {
          pagesParams: data!.pageParams,
          pages: data!.pages.map(page => (page.find(a => a.id === articleId) ? page.filter(a => a.id !== articleId) : page)),
        };
      });
    },
  });

  const onPressModify = () => {
    navigation.navigate('Write', {articleId});
  };
  const onPressRemove = () => {
    setAskRemove(true);
  };
  const onCancelRemove = () => {
    setAskRemove(false);
  };
  const onConfirmRemove = () => {
    setAskRemove(false);
    mutate(articleId);
  };
  return (
    <>
      <View style={styles.block}>
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPressModify}>
          <Text style={styles.buttonText}>수정</Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={onPressRemove} style={({pressed}) => pressed && styles.pressed}>
          <Text style={styles.buttonText}>삭제</Text>
        </Pressable>
      </View>
      <AskDialog
        visible={askRemove}
        title="게시글 삭제"
        message="게시글을 삭제하시겠습니까?"
        isDestructive
        confirmText="삭제"
        cancelText="취소"
        onConfirm={onConfirmRemove}
        onClose={onCancelRemove}
      />
    </>
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
