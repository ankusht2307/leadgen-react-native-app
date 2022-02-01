/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import AppInput from '../../components/UI/Input';
import AppButton from '../../components/UI/Button';
import AuthenticationFormSchema from '../../utils/validatiors/AuthenticationFormValidation';
import Gradient from '../../components/Gradient';
import { register } from '../../service/authService';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.register.user);

  useEffect(() => {
    if (user && user.data) {
      navigation.navigate('AuthScreeen');
    }
  }, [navigation, user]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AuthenticationFormSchema),
  });

  const onSubmit = (data) => {
    dispatch(register(data));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' && 'height'}
      keyboardVerticalOffset={Platform.OS === 'android' && 100}
      style={styles.screen}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
          <Gradient
            styleProps={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Card style={styles.loginContainer}>
              <ScrollView keyboardShouldPersistTaps="always">
                <AppInput
                  label="E-Mail"
                  name="email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Password"
                  name="password"
                  keyboardType="default"
                  secureTextEntry
                  minLength={5}
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppButton
                  title="Register"
                  btnColor={Colors.primary}
                  onHit={handleSubmit(onSubmit)}
                />
                <AppButton
                  title="Switch to Login"
                  btnColor={Colors.accent}
                  onHit={() => {
                    navigation.replace('AuthScreeen');
                  }}
                />
              </ScrollView>
            </Card>
          </Gradient>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: 'Register',
  headerRight: null,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  loginContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
});

export default Register;
