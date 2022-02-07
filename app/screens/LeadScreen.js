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
import { getLeadById } from '../service/leadService';

const Lead = ({ route }) => {
  const dispatch = useDispatch();
  const lead = useSelector((state) => state.lead.lead.data);
  const isFocused = useIsFocused();
  console.log(lead);
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
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Handler Name: </Text>
                    {lead.handler}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Client Name: </Text>
                    {lead.clientName}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Platform: </Text>
                    {lead.platform}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Status: </Text>
                    {lead.status}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Job Type: </Text>
                    {lead.jobType}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Rate Applied: </Text>
                    {lead.rateApplied}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Connects Used: </Text>
                    {lead.connectsUsed}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Total Spent: </Text>
                    {lead.totalSpent}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Mode: </Text>
                    {lead.mode}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Lead Url: </Text>
                    {lead.leadUrl}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Rate Range: </Text>
                    {lead.rateRange}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Primary Skills: </Text>
                    {lead.primarySkills}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Secondary Skills: </Text>
                    {lead.secondarySkills}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Profile: </Text>
                    {lead.profile}
                  </Text>
                  <Text style={styles.listItemData}>
                    <Text style={styles.listItemLabel}>Comments: </Text>
                    {lead.comments}
                  </Text>
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
  drawerItemStyle: {
    display: 'none',
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  leadContainer: {
    padding: 20,
    marginTop: 0,
  },
  listItemLabel: {
    fontFamily: 'open-sans-bold',
  },
  listItemData: {
    fontFamily: 'open-sans',
  },
});

export default Lead;
