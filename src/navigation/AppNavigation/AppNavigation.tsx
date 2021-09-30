/**
 *
 * App Navigation
 * @format
 * @flow
 *
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-native-paper';

import SCREENS from './config';

import type {PropsType, ScreenType} from './types';

const Stack = createStackNavigator();

function AppNavigation(props: PropsType): React.ReactElement {
  const {headerShown, initialRouteName} = props;

  return (
    <Provider>
      <Stack.Navigator
        screenOptions={{
          headerShown: headerShown || false,
        }}
        initialRouteName={initialRouteName}>
        {SCREENS.map((SCREEN: ScreenType, index: number) => {
          const {name, screen} = SCREEN;
          const key = `${index}`;
          return <Stack.Screen key={key} name={name} component={screen} />;
        })}
      </Stack.Navigator>
    </Provider>
  );
}

export default AppNavigation;
