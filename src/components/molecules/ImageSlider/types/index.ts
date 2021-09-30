/**
 *
 * @format
 * @flow
 *
 */

import {ImageStyle, ViewStyle, StyleProps} from 'react-native';

export type ImageType = {
  id: string;
  source: (location: string) => void;
};

export type PropsType = {
  data: ImageType;
  containerStyle?: StyleProps<ViewStyle>;
  imageStyle?: StyleProps<ImageStyle>;
  horizontal?: boolean;
  showScrollBar?: boolean;
};
