import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import ColorPalette from '../constants/Colors';

/*
  1. Create the config
*/
const ToastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: (props) => (
    <BaseToast
      {...props}
      style={styles.successStyle}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.successStyle}
    />
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: (props) => <ErrorToast {...props} text1Style={styles.errorStyle} />,
  /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.

      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
  tomatoToast: ({ text1, props }) => (
    <View style={styles.warningStyle}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  contentContainerStyle: { paddingHorizontal: 15 },
  successStyle: {
    fontSize: 17,
    borderLeftColor: ColorPalette.green,
  },
  errorStyle: {
    fontSize: 17,
    borderLeftColor: ColorPalette.red,
  },
  warningStyle: {
    height: 60,
    width: '100%',
    backgroundColor: ColorPalette.tomato,
  },
});

export default ToastConfig;
