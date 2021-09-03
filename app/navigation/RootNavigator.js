import React from 'react';
import AuthScreen from '../screens/user/AuthScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
