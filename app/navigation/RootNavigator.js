import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../constants/Colors';
import Login, { screenOptions as loginScreenOption } from '../screens/auth/Login';
import Register, { screenOptions as registerScreenOption } from '../screens/auth/Register';
import Dashboard, { screenOptions as dashboardScreenOption } from '../screens/Dashboard';
import Dashboard2, { screenOptions as dashboard2ScreenOption } from '../screens/Dashboard2';
import WelcomeScreen, { screenOptions as welcomeScreenOption } from '../screens/WelcomeScreen';
import CreateUser, { screenOptions as createUserScreenOptions } from '../screens/CreateUser';
import UserList, { screenOptions as UsersScreenOptions } from '../screens/UserList';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.primary,
  },
  headerBackVisible: Platform.OS === 'android' && true,
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Colors.white,
};

const AuthStackNavigator = createNativeStackNavigator();
export const AuthNavigatior = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen
        name="WelocmeScreen"
        component={WelcomeScreen}
        options={welcomeScreenOption}
      />
      <AuthStackNavigator.Screen name="AuthScreeen" component={Login} options={loginScreenOption} />
      <AuthStackNavigator.Screen
        name="Register"
        component={Register}
        options={registerScreenOption}
      />
    </AuthStackNavigator.Navigator>
  );
};

const ScreensDrawerNavigator = createDrawerNavigator();

export const ScreensNavigator = () => {
  return (
    <ScreensDrawerNavigator.Navigator screenOptions={defaultNavOptions}>
      <ScreensDrawerNavigator.Screen
        name="Dashboard"
        component={Dashboard}
        options={dashboardScreenOption}
      />
      <ScreensDrawerNavigator.Screen
        name="Dashboard2"
        component={Dashboard2}
        options={dashboard2ScreenOption}
      />
      <ScreensDrawerNavigator.Screen
        name="Create User"
        component={CreateUser}
        options={createUserScreenOptions}
      />
      <ScreensDrawerNavigator.Screen
        name="Users"
        component={UserList}
        options={UsersScreenOptions}
      />
    </ScreensDrawerNavigator.Navigator>
  );
};
