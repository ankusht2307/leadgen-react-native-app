import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const CButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <Button {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
  },
});

export default CButton;
