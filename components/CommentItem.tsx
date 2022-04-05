import React, {VFC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface CommentItemProps {
  id: number;
  message: string;
  username: string;
  publishedAt: string;
}

export const CommentItem: VFC<CommentItemProps> = ({message, username, publishedAt}) => {
  const formattedDate = new Date(publishedAt).toLocaleString();

  return (
    <View style={styles.block}>
      <View style={styles.head}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
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
});
