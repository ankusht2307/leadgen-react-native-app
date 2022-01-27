import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
};

const styles = StyleSheet.create({
    // TODO: center loader
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'relative',
      zIndex: 22222
    },
  });

export default Loader;
