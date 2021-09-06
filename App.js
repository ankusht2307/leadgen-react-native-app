/* eslint-disable global-require */
import * as Font from 'expo-font';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';

import store from './app/redux/store';
import RootNavigator from './app/navigation/RootNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./app/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./app/assets/fonts/OpenSans-Bold.ttf'),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
