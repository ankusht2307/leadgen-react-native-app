import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

import Gradient from '../components/Gradient';
import Card from '../components/UI/Card';
import AppInput from '../components/UI/Input';
import AppButton from '../components/UI/Button';
import Colors from '../constants/Colors';
import UserSchema from '../utils/validatiors/UserSchema';
import AppPicker from '../components/UI/Picker';
import { createUser } from '../service/user/userService';
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from '../redux/user/userActions';

const CreateUser = ({ navigation }) => {
  const roles = [
    { label: 'Choose role', value: '' },
    { label: 'Admin', value: 'admin' },
    { label: 'Super Admin', value: 'super-admin' },
    { label: 'User', value: 'user' },
  ];
  const desinations = [
    { label: 'Choose designation', value: '' },
    { label: 'Software Engineer', value: 'software engineer' },
    { label: 'BDE', value: 'bde' },
    { label: 'Management Trainee', value: 'mt' },
    { label: 'Software Eng. Trainee', value: 'set' },
  ];
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
  }, [user]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserSchema),
  });

  const onSubmit = async (data) => {
    dispatch(fetchUserRequest);
    const result = await createUser(data);
    if (result.data) {
      Toast.show({
        type: 'success',
        text2: result.message,
      });
      dispatch(fetchUserSuccess(result.data));
      navigation.navigate('Users');
    } else {
      dispatch(fetchUserFailure(result));
      Toast.show({
        type: 'error',
        text2: result.message,
      });
    }
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
                  label="Name"
                  name="name"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
              />
                <AppInput
                  label="E-Mail"
                  name="email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
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
