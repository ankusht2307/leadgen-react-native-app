/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Card from '../components/UI/Card';
import AppButton from '../components/UI/Button';
import Colors from '../constants/Colors';
import Gradient from '../components/Gradient';

const WelcomeScreen = ({ navigation }) => {
  return (
    <Gradient styleProps={{ alignItems: 'center', justifyContent: 'center' }}>
      <Card style={styles.welcomeContainer}>
        <Text style={styles.titleText}>Hiring Management</Text>
        <View style={styles.titleContainer}>
          <Image style={styles.logo} resizeMode="contain" source={require('../assets/logo.png')} />
        </View>
        <AppButton
          title="Login"
          btnColor={Colors.primary}
          onHit={() => navigation.navigate('AuthScreeen')}
        />
        <AppButton
          title="Register"
          btnColor={Colors.accent}
          onHit={() => navigation.navigate('Register')}
        />
      </Card>
    </Gradient>
  );
};

export const screenOptions = {
  headerTitle: 'Bonami Software',
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    margin: 20,
    // width: 300,
    // backgroundColor: Colors.black,
    height: 50,
  },
  welcomeContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
});

export default WelcomeScreen;
