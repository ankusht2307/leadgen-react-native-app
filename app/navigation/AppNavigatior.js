import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigatior, ScreensNavigator } from './RootNavigator';

const AppNavigator = () => {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;

  return (
    <NavigationContainer>
      {!isAuthenticated && <AuthNavigatior />}
      {isAuthenticated && <ScreensNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
