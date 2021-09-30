/**
 *
 * @format
 * @flow
 *
 */

import {ViewStyle, StyleProps} from 'react-native';

export type PropsType = {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProps<ViewStyle>;
};
