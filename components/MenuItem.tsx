import React, {VFC} from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';

interface MenuItemProps {
  onPress(): void;
  name: string;
}

export const MenuItem: VFC<MenuItemProps> = ({onPress, name}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.block, Platform.OS === 'ios' && pressed && styles.pressed]}
      onPress={onPress}
      android_ripple={{color: '#eee'}}>
      <Text>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  pressed: {
    backgroundColor: '#eee',
  },
});
