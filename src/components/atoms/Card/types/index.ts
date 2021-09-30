/**
 *
 * @format
 * @flow
 *
 */

import type {Node} from 'react';
import {ViewStyle, StyleProps} from 'react-native';

export type PropsType = {
  style?: StyleProps<ViewStyle>;
  children: Node;
};
