import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import Gradient from '../components/Gradient';
import Card from '../components/UI/Card';

const UserList = () => {
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
                <Text>User List here</Text>
              </ScrollView>
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

export default UserList;
