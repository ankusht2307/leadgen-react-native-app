import React, { useState } from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import Input from '../../components/UI/Input';
import AuthenticationFormSchema from '../../utils/validatiors/AuthenticationFormValidation';

const AuthScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AuthenticationFormSchema),
  });
  const [isLoading] = useState(false);
  // const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);

  const onSubmit = (data) => console.log('data', data);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={styles.screen}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}>
          <Card style={styles.authContainer}>
            <ScrollView>
              <Input
                label="E-Mail"
                name="email"
                keyboardType="email-address"
                autoCapitalize="none"
                control={control}
                errors={errors}
              />
              <Input
                label="Password"
                name="password"
                keyboardType="default"
                secureTextEntry
                minLength={5}
                autoCapitalize="none"
                control={control}
                errors={errors}
              />
              <View style={styles.buttonContainer}>
                {isLoading ? (
                  <ActivityIndicator size="small" color={Colors.primary} />
                ) : (
                  <Button
                    title={isSignup ? 'Sign Up' : 'Login'}
                    color={Colors.primary}
                    onPress={handleSubmit(onSubmit)}
                  />
                )}
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
                  color={Colors.accent}
                  onPress={() => {
                    setIsSignup((prevState) => !prevState);
                  }}
                />
              </View>
            </ScrollView>
          </Card>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: 'Authenticate',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default AuthScreen;
