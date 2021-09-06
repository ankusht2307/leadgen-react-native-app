import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import AuthScreen, {
  screenOptions as authScreenOption,
} from '../screens/AuthScreen';
import Dashboard, {
  screenOptions as DashboardScreenOption,
} from '../screens/WelcomeScreen';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavOptions}>
        <Stack.Screen
          name="Home"
          component={AuthScreen}
          options={authScreenOption}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={DashboardScreenOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
