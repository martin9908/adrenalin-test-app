/**
 *
 * @format
 * @flow
 *
 */

import HomePage from '@pages/HomePage';

const SCREENS = [
  {
    name: 'Home',
    screen: HomePage,
    tabBarIcon: 'compass-outline',
  },
  {
    name: 'Report',
    screen: HomePage,
    tabBarIcon: 'chart-bar',
  },
  {
    name: 'Profile',
    screen: HomePage,
    tabBarIcon: 'account',
  },
];

export {SCREENS as default};
