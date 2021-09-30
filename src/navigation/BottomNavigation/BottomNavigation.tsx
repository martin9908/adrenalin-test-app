/**
 *
 * App Navigation
 * @format
 * @flow
 *
 */

import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Provider} from 'react-native-paper';

import {SECONDARY_COLOR} from '@colors';

import SCREENS from './config';

import type {PropsType, ScreenType} from './types';

const Tab = createMaterialBottomTabNavigator();

function BottomNavigation(props: PropsType): React.ReactElement {
  const {headerShown, initialRouteName} = props;

  return (
    <Provider>
      <Tab.Navigator
        initialRouteName={initialRouteName}
        labeled={false}
        barStyle={{backgroundColor: SECONDARY_COLOR}}
        screenOptions={{
          headerShown: headerShown || false,
        }}>
        {SCREENS.map((SCREEN: ScreenType, index: number) => {
          const {name, screen, tabBarIcon} = SCREEN;
          const key = `${index}`;
          return (
            <Tab.Screen
              key={key}
              name={name}
              component={screen}
              options={{
                tabBarIcon,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </Provider>
  );
}

export default BottomNavigation;
