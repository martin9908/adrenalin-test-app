/**
 *
 * @format
 * @flow
 *
 */

import type {Node} from 'react';
import {TextStyle, StyleProp} from 'react-native';

export type PropsType = {
  style?: StyleProp<TextStyle>;
  children: Node;
};
