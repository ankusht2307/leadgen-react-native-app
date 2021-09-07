import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

const Gradient = ({ children, styleProps }) => {
  return (
    <LinearGradient colors={['#ffe3ff', '#9ae184']} style={{ ...styles.gradient, ...styleProps }}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default Gradient;
