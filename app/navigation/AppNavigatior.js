import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigatior, ScreensNavigator } from './RootNavigator';

const AppNavigator = () => {
  const user = useSelector((state) => state.login.user);

  return (
    <NavigationContainer>
      {user && <AuthNavigatior />}
      {!user && <ScreensNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
