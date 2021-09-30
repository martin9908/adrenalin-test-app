/**
 * Adrenalin React-Native Test
 *
 *
 * @format
 * @flow
 *
 */

import React, {useRef, useContext} from 'react';
import {ActivityIndicator, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from '@navigation/AppNavigation';
import {ApplicationContext, ApplicationProvider} from '@contexts/Application';

const App = () => {
  const {showActivityIndicator, setCurrentRouteName} =
    useContext(ApplicationContext);
  const navigationRef = useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        const {current} = navigationRef || {};
        const {getCurrentRoute} = current || {};
        const currentRouteName = getCurrentRoute().name;
        setCurrentRouteName(currentRouteName);
      }}
      onStateChange={() => {
        const {current} = navigationRef || {};
        const {getCurrentRoute} = current || {};
        const currentRouteName = getCurrentRoute().name;
        setCurrentRouteName(currentRouteName);
      }}>
      <AppNavigation />
      {showActivityIndicator && <ActivityIndicator />}
    </NavigationContainer>
  );
};

const AppWrapper = (): React.ReactElement => {
  return (
    <ApplicationProvider>
      <StatusBar barStyle="light-content" />
      <App />
    </ApplicationProvider>
  );
};

export default AppWrapper;
