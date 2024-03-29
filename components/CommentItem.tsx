import React, {VFC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface CommentItemProps {
  id: number;
  message: string;
  username: string;
  publishedAt: string;
  isMyComment: boolean;
  onRemove(id: number): void;
  onModify(id: number): void;
}

export const CommentItem: VFC<CommentItemProps> = ({id, message, username, publishedAt, isMyComment, onRemove, onModify}) => {
  const formattedDate = new Date(publishedAt).toLocaleString();

  const handleRemove = () => onRemove(id);
  const handleModify = () => onModify(id);

  return (
    <View style={styles.block}>
      <View style={styles.head}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
      {isMyComment && (
        <View style={styles.actionButtons}>
          <Pressable style={({pressed}) => pressed && styles.pressed} hitSlop={8} onPress={handleModify}>
            <Text style={styles.buttonText}>수정</Text>
          </Pressable>
          <View style={styles.separator} />
          <Pressable style={({pressed}) => pressed && styles.pressed} hitSlop={8} onPress={handleRemove}>
            <Text style={styles.buttonText}>삭제</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingBottom: 16,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontWeight: 'bold',
  },
  date: {
    color: '#546e7a',
    fontSize: 10,
    marginTop: 4,
  },
  message: {
    marginTop: 4,
  },
  actionButtons: {
    marginTop: 24,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
  buttonText: {
    fontSize: 12,
    color: '#546e7a',
  },
  pressed: {
    opacity: 0.75,
  },
});
