import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Gradient from '../components/Gradient';
import Card from '../components/UI/Card';
import AppInput from '../components/UI/Input';
import AppButton from '../components/UI/Button';
import Colors from '../constants/Colors';
import UserSchema from '../utils/validatiors/UserSchema';
import AppPicker from '../components/UI/Picker';

const CreateUser = () => {
  const roles = [
    { label: 'Choose role', value: '' },
    { label: 'Software Engineer', value: 'software engineer' },
    { label: 'BDE', value: 'bde' },
    { label: 'Management Trainee', value: 'mt' },
    { label: 'Software Eng. Trainee', value: 'set' },
  ];
  const desinations = [
    { label: 'Choose designation', value: '' },
    { label: 'Team Lead', value: 'TL' },
    { label: 'Project Manger', value: 'PM' },
    { label: 'Human Resources', value: 'HR' },
  ];
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
      style={styles.screen}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
          <Gradient styleProps={styles.loginWrapper}>
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
                {/* <AppInput
                  label="Designation"
                  name="designation"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                /> */}
                <AppPicker
                  label="Designation"
                  name="designation"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                  items={desinations}
                />
                <AppPicker
                  label="Role"
                  name="role"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                  items={roles}
                />
                <AppInput
                  label="Avatar"
                  name="avatar"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppButton
                  title="Create User"
                  btnColor={Colors.accent}
                  onHit={handleSubmit(onSubmit)}
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
  headerTitle: 'Create User',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  loginWrapper: {
    alignItems: 'center',
  },
  loginContainer: {
    width: '90%',
    maxWidth: 400,
    maxHeight: 'auto',
    padding: 20,
    marginTop: 40,
  },
});

export default CreateUser;
