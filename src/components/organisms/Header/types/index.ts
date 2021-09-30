/**
 *
 * @format
 * @flow
 *
 */

import type {Node} from 'react';
import {ViewStyle, StyleProps} from 'react-native';

export type PropsType = {
  children?: Node;
  text?: string;
  showLeft?: boolean;
  leftIcon?: string;
  leftButtonHandler?: () => void;
  showRight?: boolean;
  rightIcon?: string;
  rightButtonHandler?: () => void;
  marginStyle?: StyleProps<ViewStyle>;
};
