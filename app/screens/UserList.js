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
import { TouchableOpacity } from 'react-native-gesture-handler';
import Gradient from '../components/Gradient';
import { getUsers } from '../service/userService';
import DefaultText from '../components/UI/DefaultText';
import ColorPalette from '../constants/Colors';

const UserList = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (isFocused) {
      dispatch(getUsers());
    }
  }, [dispatch, isFocused, loading]);
  console.log(user);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
      style={styles.screen}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
          <Gradient>
            {user && user.data && user.data.length ? (
              <FlatList
                style={styles.loginContainer}
                data={user.data}
                renderItem={({ item }) => (
                  <TouchableOpacity key={item.email} style={styles.listItem}>
                    <Text style={styles.listItemData}>
                      <Text style={styles.listItemLabel}>Name: </Text>
                      {item.name ? item.name : 'No name saved'}
                    </Text>
                    <Text style={styles.listItemData}>
                      <Text style={styles.listItemLabel}>Role: </Text>
                      {item.role.toString()}
                    </Text>
                    <Text style={styles.listItemData}>
                      <Text style={styles.listItemLabel}>Designation: </Text>
                      {item.designation}
                    </Text>
                    <Text style={styles.listItemData}>
                      <Text style={styles.listItemLabel}>
                        No, of leads Submitted:
                      </Text>
                      {item.leads.length}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.email}
              />
            ) : (
              <DefaultText styles={styles.noLeadStyles}>
                <Text style={styles.noLeadText}>No Users Found</Text>
              </DefaultText>
            )}
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

export default UserList;
