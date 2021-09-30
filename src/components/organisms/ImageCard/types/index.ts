/**
 *
 * @format
 * @flow
 *
 */

import {ImageStyle, TextStyle, ViewStyle, StyleProps} from 'react-native';

type IconPropsType = {
  name: string;
  size: number;
  color: string;
};

export type PropsType = {
  containerStyle?: StyleProps<ViewStyle>;
  image: () => void;
  resizeMode?: string;
  imageStyle?: StyleProps<ImageStyle>;
  textContainerStyle?: StyleProps<ViewStyle>;
  title: string;
  titleStyle?: StyleProps<TextStyle>;
  subtitle?: string;
  subtitleStyle?: StyleProps<TextStyle>;
  iconData?: Array<IconPropsType>;
  showIcon?: boolean;
  onPressHandler?: () => void;
};
