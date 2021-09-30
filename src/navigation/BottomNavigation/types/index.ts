/**
 *
 * @format
 * @flow
 *
 */
import type {Node} from 'react';

export type PropsType = {
  initialRouteName?: string;
  headerShown?: boolean;
};

export type ScreenType = {
  name: string;
  screen: Node;
};
