/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * @format
 * @flow
 *
 */

import {Node} from 'react';
import {ViewStyle, StyleProps} from 'react-native';

export type PropsType = {
  data: any;
  containerStyle: StyleProps<ViewStyle>;
  horizontal?: boolean;
  numColumns?: number;
  showScrollBar?: boolean;
  Item: Node;
};
