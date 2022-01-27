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
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import Gradient from '../components/Gradient';
import Card from '../components/UI/Card';
import { getUsers } from '../service/user/userService';
import Colors from '../constants/Colors';

const UserList = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { error, loading, user } = useSelector((state) => state.user);
  console.log('called');
  useEffect(() => {
    if (isFocused) {
      dispatch(getUsers());
    }
  }, [dispatch, isFocused, loading]);

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
              {loading ? (
                <View>
                  <Text>Loading...</Text>
                </View>
              ) : (
                <FlatList
                  data={user.data}
                  renderItem={({ item }) => (
                    <View key={item.email} style={styles.listItem}>
                      <Text>
Name:
{' '}
{item.name ? item.name : 'name'}
                      </Text>
                      <Text>
Role:
{' '}
{item.role.toString()}
                      </Text>
                      <Text>
Designation:
{' '}
{item.designation}
                      </Text>
                      <Text>
No, of leads Submitted:
{' '}
{item.leads.length}
                      </Text>
                    </View>
                  )}
                />
              )}
            </Card>
          </Gradient>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export const screenOptions = {
  headerTitle: 'Users',
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

export default UserList;
