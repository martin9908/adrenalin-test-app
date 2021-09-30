/**
 *
 * @format
 * @flow
 *
 */

import {ViewStyle, StyleProps} from 'react-native';

export type CardType = {
  id: string;
  title: string;
  bgColor?: string;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  showIcon?: boolean;
};

export type PropsType = {
  data: Array<CardType>;
  onPressHandler: () => void;
};
