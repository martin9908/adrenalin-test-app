/**
 *
 * @format
 * @flow
 *
 */

import {ViewStyle, TextStyle, StyleProp} from 'react-native';

export type PropsType = {
  containerStyle?: StyleProp<ViewStyle>;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  showLeft?: boolean;
  leftIcon?: string;
  leftButtonHandler?: () => void;
  showRight?: boolean;
  rightIcon?: string;
  rightButtonHandler?: () => void;
};
