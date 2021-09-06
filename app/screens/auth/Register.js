import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import AppInput from '../../components/UI/Input';
import AppButton from '../../components/UI/Button';
import AuthenticationFormSchema from '../../utils/validatiors/AuthenticationFormValidation';
import signIn from '../../redux/actions/AuthActions';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AuthenticationFormSchema),
  });

  const onSubmit = () => {
    dispatch(signIn());
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
      style={styles.screen}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={['#ffe3ff', '#9ae184']} style={styles.gradient}>
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
                color={Colors.primary}
                onPress={handleSubmit(onSubmit)}
              />
              <AppButton
                title="Switch to Login"
                color={Colors.accent}
                onPress={() => {
                  navigation.replace('AuthScreeen');
                }}
              />
            </ScrollView>
          </Card>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: 'Register',
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
  loginContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
});

export default Login;
