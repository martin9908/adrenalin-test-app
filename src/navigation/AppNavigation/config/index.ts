/**
 *
 * @format
 * @flow
 *
 */

import BottomNavigation from '@navigation/BottomNavigation';
import DetailPage from '@pages/DetailPage';

const SCREENS = [
  {
    name: 'Home',
    screen: BottomNavigation,
  },
  {
    name: 'Detail',
    screen: DetailPage,
  },
];

export {SCREENS as default};
