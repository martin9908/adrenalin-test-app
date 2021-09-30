/**
 *
 * @format
 * @flow
 *
 */

import {ViewStyle, StyleProps} from 'react-native';

type IconProps = {
  id: string;
  name: string;
  size: number;
  color: string;
};

export type PropsType = {
  iconContainer: StyleProps<ViewStyle>;
  iconData: Array<IconProps>;
  iconType?: 'small' | 'medium';
};
