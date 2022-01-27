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
import LeadSchema from '../utils/validatiors/LeadSchema';
import { createLead } from '../service/user/leadService';
import {
  fetchLeadFailure,
  fetchLeadRequest,
  fetchLeadSuccess,
} from '../redux/lead/leadActions';

const CreateLead = ({ navigation }) => {
  const dispatch = useDispatch();
  const lead = useSelector((state) => state.lead);

  useEffect(() => {
  }, [lead]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LeadSchema),
  });

  const onSubmit = async (data) => {
    dispatch(fetchLeadRequest);
    const result = await createLead(data);
    if (result.data) {
      Toast.show({
        type: 'success',
        text2: result.message,
      });
      dispatch(fetchLeadSuccess(result.data));
    //   navigation.navigate('Users');
    } else {
      dispatch(fetchLeadFailure(result));
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
                  label="Handler"
                  name="handler"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Platform"
                  name="platform"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Profile"
                  name="profile"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Rate Applied"
                  name="rateApplied"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Rate Range"
                  name="rateRange"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Job Type"
                  name="jobType"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Mode"
                  name="mode"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Lead Url"
                  name="leadUrl"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Status"
                  name="status"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Client Name"
                  name="clientName"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Primary Skills"
                  name="primarySkills"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Secondary Skills"
                  name="secondarySkills"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Connects Used"
                  name="connectsUsed"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Total Spent"
                  name="totalSpent"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Average Pay"
                  name="averagePay"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Other Open Jobs"
                  name="otherOpenJob"
                  keyboardType="default"
                  autoCapitalize="none"
                  control={control}
                  errors={errors}
                />
                <AppInput
                  label="Comments"
                  name="comments"
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
  headerTitle: 'Create Lead',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  loginWrapper: {
    alignItems: 'center',
  },
  loginContainer: {
    width: '95%',
    maxWidth: 400,
    maxHeight: 'auto',
    padding: 20,
    marginTop: 40,
  },
});

export default CreateLead;
