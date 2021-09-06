import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.screen}>
      <Text>Welcome to Dashboard 2</Text>
    </View>
  );
};

export const screenOptions = {
  headerTitle: 'Dashboard 2',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
