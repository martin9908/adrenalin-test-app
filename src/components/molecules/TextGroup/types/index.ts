/**
 *
 * @format
 * @flow
 *
 */

import {ViewStyle, TextStyle, StyleProps} from 'react-native';

export type PropsType = {
  containerStyle?: StyleProps<ViewStyle>;
  title: string;
  titleStyle?: StyleProps<TextStyle>;
  subtitle?: string;
  subtitleStyle?: StyleProps<TextStyle>;
};
