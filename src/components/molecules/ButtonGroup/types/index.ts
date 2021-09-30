/**
 *
 * @format
 * @flow
 *
 */

import {ViewStyle, TextStyle, StyleProp} from 'react-native';

export type buttonProps = {
  id: string;
  title: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  buttonType?: string;
  onPress: () => void;
};

export type PropsType = {
  buttonData: Array<buttonProps>;
  horizontal?: boolean;
  showScrollBar?: boolean;
};
