/* eslint-disable no-underscore-dangle */
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Gradient from '../components/Gradient';
import Card from '../components/UI/Card';
import { getLeadById } from '../service/user/leadService';

const Lead = ({ route }) => {
  const dispatch = useDispatch();
  const lead = useSelector((state) => state.lead.lead.data);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(getLeadById(route.params.leadId));
    }
  }, [dispatch, isFocused, route.params.leadId]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
      style={styles.screen}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
          <Gradient>
            <Card style={styles.leadContainer}>
              {lead ? (
                <View>
                  <Text>{lead.mode}</Text>
                </View>
              ) : (
                <View>
                  <Text>No lead</Text>
                </View>
              )}
            </Card>
          </Gradient>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: 'Lead',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  leadContainer: {
    padding: 20,
    marginTop: 0,
  },
});

export default Lead;
