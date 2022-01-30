import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Login, {
  screenOptions as loginScreenOption,
} from '../screens/auth/Login';
import Register, {
  screenOptions as registerScreenOption,
} from '../screens/auth/Register';
import Dashboard, {
  screenOptions as dashboardScreenOption,
} from '../screens/Dashboard';
import Dashboard2, {
  screenOptions as dashboard2ScreenOption,
} from '../screens/Dashboard2';
import WelcomeScreen, {
  screenOptions as welcomeScreenOption,
} from '../screens/WelcomeScreen';
import CreateUser, {
  screenOptions as createUserScreenOptions,
} from '../screens/CreateUser';
import UserList, {
  screenOptions as UsersScreenOptions,
} from '../screens/UserList';
import CreateLead, {
  screenOptions as createLeadScreenOptions,
} from '../screens/CreateLead';
import LeadList, {
  screenOptions as leadListScreenOptions,
} from '../screens/LeadList';
import { logout } from '../service/auth/authService';
import store from '../redux/store';

const defaultNavOptions = () => ({
  headerStyle: {
    backgroundColor:
      Platform.OS === 'android' ? Colors.primary : Colors.primary,
  },
  headerBackVisible: Platform.OS === 'android' && true,
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Colors.white,
  headerRight: () => (
    <MaterialCommunityIcons
      name="logout"
      size={24}
      color="black"
      onPress={() => store.dispatch(logout())}
      style={styles.logout}
    />
  ),
});

const AuthStackNavigator = createNativeStackNavigator();
export const AuthNavigatior = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions()}>
      <AuthStackNavigator.Screen
        name="WelocmeScreen"
        component={WelcomeScreen}
        options={welcomeScreenOption}
      />
      <AuthStackNavigator.Screen
        name="AuthScreeen"
        component={Login}
        options={loginScreenOption}
      />
      <AuthStackNavigator.Screen
        name="Register"
        component={Register}
        options={registerScreenOption}
      />
    </AuthStackNavigator.Navigator>
  );
};

const Drawer = createDrawerNavigator();

export const ScreensNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={defaultNavOptions}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={dashboardScreenOption}
      />
      <Drawer.Screen
        name="Dashboard2"
        component={Dashboard2}
        options={dashboard2ScreenOption}
      />
      <Drawer.Screen
        name="Create User"
        component={CreateUser}
        options={createUserScreenOptions}
      />
      <Drawer.Screen
        name="Users"
        component={UserList}
        options={UsersScreenOptions}
      />
      <Drawer.Screen
        name="Create Lead"
        component={CreateLead}
        options={createLeadScreenOptions}
      />
      <Drawer.Screen
        name="Leads"
        component={LeadList}
        options={leadListScreenOptions}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  logout: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: Colors.white,
    marginRight: 10,
  },
});
