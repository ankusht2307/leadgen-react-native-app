import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

import Gradient from '../components/Gradient';
import Card from '../components/UI/Card';
import Colors from '../constants/Colors';
import { getLeadsByUser } from '../service/user/leadService';
import {
  fetchLeadFailure,
  fetchLeadRequest,
  fetchLeadSuccess,
} from '../redux/lead/leadActions';

const LeadList = ({ navigation }) => {
  const dispatch = useDispatch();
  const lead = useSelector((state) => state.lead);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    getLeads();
    setLeads(lead.lead);
  }, [lead.loading]);

  const getLeads = async () => {
    dispatch(fetchLeadRequest);
    const result = await getLeadsByUser();
    if (result.data) {
      Toast.show({
        type: 'success',
        text2: result.message,
      });
      dispatch(fetchLeadSuccess(result.data));
      //   navigation.navigate('Leads');
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
          <Gradient>
            <Card style={styles.loginContainer}>
              <FlatList
                data={leads}
                renderItem={({ item }) => (
                  // eslint-disable-next-line no-underscore-dangle
                  <View key={item._id} style={styles.listItem}>
                    <Text>
Handler Name:
{' '}
{item.handler}
                    </Text>
                    <Text>
Platform:
{' '}
{item.platform}
                    </Text>
                    <Text>
Profile:
{' '}
{item.profile}
                    </Text>
                    <Text>
Rate Applied:
{' '}
{item.rateApplied}
                    </Text>
                    <Text>
Rate Range:
{' '}
{item.rateRange}
                    </Text>
                    <Text>
Job Type:
{' '}
{item.jobType}
                    </Text>
                    <Text>
Mode:
{' '}
{item.mode}
                    </Text>
                    <Text>
Lead Url:
{' '}
{item.leadUrl}
                    </Text>
                    <Text>
Status:
{' '}
{item.status}
                    </Text>
                    <Text>
Client Name:
{' '}
{item.clientName}
                    </Text>
                    <Text>
Primary Skills:
{' '}
{item.primarySkills}
                    </Text>
                    <Text>
Secondary Skills:
{' '}
{item.secondarySkills}
                    </Text>
                    <Text>
Connects Used:
{' '}
{item.connectsUsed}
                    </Text>
                    <Text>
Total Spent:
{' '}
{item.totalSpent}
                    </Text>
                    <Text>
Average Pay:
{' '}
{item.averagePay}
                    </Text>
                    <Text>
Other Open Jobs:
{' '}
{item.otherOpenJob}
                    </Text>
                    <Text>
Comments:
{' '}
{item.comments}
                    </Text>
                  </View>
                )}
              />
            </Card>
          </Gradient>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: 'Leads',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  loginContainer: {
    padding: 20,
    marginTop: 0,
  },
  listItem: {
    borderBottomColor: Colors.tomato,
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default LeadList;
