import React, {VFC} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

export interface AskDialogProps {
  visible: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText?: string;
  isDestructive?: boolean;
  onClose(): void;
  onConfirm(): void;
}

export const AskDialog: VFC<AskDialogProps> = ({visible, title, message, confirmText, cancelText, isDestructive, onClose, onConfirm}) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.block}>
        <View style={styles.whiteBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttons}>
            <Pressable style={({pressed}) => pressed && styles.pressed} hitSlop={8} onPress={onClose}>
              <Text style={[styles.buttonText, styles.cancelText]}>{cancelText}</Text>
            </Pressable>
            <View style={styles.separator} />
            <Pressable style={({pressed}) => pressed && styles.pressed} hitSlop={8} onPress={onConfirm}>
              <Text style={[styles.buttonText, styles.confirmText, isDestructive && styles.destructive]}>{confirmText}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteBox: {
    borderRadius: 4,
    width: 320,
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 16,
    marginBottom: 32,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonText: {
    fontSize: 12,
  },
  cancelText: {
    color: '#454545',
  },
  confirmText: {
    fontWeight: 'bold',
    color: '#2196f3',
  },
  destructive: {
    color: '#f44336',
  },
  pressed: {
    opacity: 0.75,
  },
  separator: {
    width: 16,
  },
});
