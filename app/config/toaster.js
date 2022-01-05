import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
      style={styles.base}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.baseText1Style}
    />
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
    />
  ),
  /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.

      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
  tomatoToast: ({ text1, props }) => (
    <View style={styles.tomato}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  tomato: {
    height: 60,
    width: '100%',
    backgroundColor: Colors.tomato,
  },
  text1Style: {
    fontSize: 17,
  },
  text2Style: {
    fontSize: 15,
  },
  baseText1Style: {
    fontSize: 15,
    fontWeight: '400',
  },
  contentContainerStyle: { paddingHorizontal: 15 },
  base: { borderLeftColor: Colors.green },
});

export default ToastConfig;
