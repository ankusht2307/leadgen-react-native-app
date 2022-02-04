import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import ColorPalette from '../../constants/Colors';

const Button = ({ title, onHit, btnColor }) => {
  return (
    <TouchableOpacity onPress={onHit}>
      <View style={{ ...styles.buttonContainer, backgroundColor: btnColor }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  title: {
    color: ColorPalette.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Button;
