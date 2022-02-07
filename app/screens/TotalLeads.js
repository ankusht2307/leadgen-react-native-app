/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import Gradient from '../components/Gradient';
import { getTotalLeads } from '../service/leadService';
import DefaultText from '../components/UI/DefaultText';
import ColorPalette from '../constants/Colors';

const TotalLeads = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { lead, loading } = useSelector((state) => state.lead);

  useEffect(() => {
    if (isFocused) {
      dispatch(getTotalLeads());
    }
  }, [dispatch, isFocused, loading]);

  const leadHandler = (leadId) => {
    navigation.navigate('Lead', { leadId });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
      style={styles.screen}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
          <Gradient>
            {lead && lead.data && lead.data.length ? (
              <FlatList
                style={styles.loginContainer}
                data={lead.data}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    key={item._id}
                    style={styles.listItem}
                    onPress={() => leadHandler(item._id)}
                  >
                    <Text style={styles.listItemData}>
                      <Text style={styles.listItemLabel}>Handler Name: </Text>
                      {item.handler}
                    </Text>
                    <Text style={styles.listItemData}>
                      <Text style={styles.listItemLabel}>Client Name: </Text>
                      {item.clientName}
                    </Text>
                    <Text style={styles.listItemData}>
                      <Text style={styles.listItemLabel}>Platform: </Text>
                      {item.platform}
                    </Text>
                    <Text style={styles.listItemData}>
                      <Text style={styles.listItemLabel}>Status: </Text>
                      {item.status}
                    </Text>
                  </TouchableOpacity>
                )}
                // eslint-disable-next-line no-underscore-dangle
                keyExtractor={(item) => item._id}
              />
            ) : (
              <DefaultText styles={styles.noLeadStyles}>
                <Text style={styles.noLeadText}>No Leads Found</Text>
              </DefaultText>
            )}
          </Gradient>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: 'Total Leads',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  loginContainer: {
    padding: 5,
    marginTop: 0,
    backgroundColor: ColorPalette.transparent,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  listItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: ColorPalette.white,
    elevation: 5,
  },
  listItemLabel: {
    fontFamily: 'open-sans-bold',
  },
  listItemData: {
    fontFamily: 'open-sans',
  },
  noLeadStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noLeadText: {
    fontFamily: 'open-sans-bold',
    color: ColorPalette.grey,
    fontWeight: 'bold',
  },
});

export default TotalLeads;
