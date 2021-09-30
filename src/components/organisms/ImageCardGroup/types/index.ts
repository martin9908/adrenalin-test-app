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

type ImageCardType = {
  id: string;
  containerStyle?: StyleProps<ViewStyle>;
  image: () => void;
  resizeMode?: string;
  imageStyle?: StyleProps<ImageStyle>;
  textContainerStyle?: StyleProps<ViewStyle>;
  title: string;
  titleStyle?: StyleProps<TextStyle>;
  subtitle?: string;
  subtitleStyle?: StyleProps<TextStyle>;
  content: string;
  iconData?: Array<IconPropsType>;
  showIcon?: boolean;
};

export type PropsType = {
  data: Array<ImageCardType>;
  horizontal?: boolean;
  showScrollBar?: boolean;
  onPressHandler?: () => void;
};
