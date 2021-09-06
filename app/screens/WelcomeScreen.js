import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Card from '../components/UI/Card';
import AppButton from '../components/UI/Button';
import Colors from '../constants/Colors';

const WelcomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={['#ffe3ff', '#9ae184']} style={styles.gradient}>
      <Card style={styles.welcomeContainer}>
        <Text style={styles.titleText}>Hiring Management</Text>
        <View style={styles.titleContainer}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../assets/NEW-LOGO-BONAMI.png')}
          />
        </View>
        <AppButton
          title="Login"
          color={Colors.primary}
          onPress={() => navigation.navigate('AuthScreeen')}
        />
        <AppButton
          title="Register"
          color={Colors.accent}
          onPress={() => navigation.navigate('Register')}
        />
      </Card>
    </LinearGradient>
  );
};

export const screenOptions = {
  headerTitle: 'Bonami Software',
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    color: Colors.accent,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    margin: 20,
    width: 200,
    height: 100,
    backgroundColor: Colors.black,
  },
  welcomeContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
});

export default WelcomeScreen;
