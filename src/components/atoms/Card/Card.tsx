/**
 *
 * Card
 * @format
 * @flow
 *
 */

import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import CardConfig from './config';

import CardStyles from './styles';
import type {PropsType} from './types';

function Card(props: PropsType): React.ReactElement {
  const {style, children} = props;

  return (
    <TouchableOpacity>
      <View style={style}>{children}</View>
    </TouchableOpacity>
  );
}

Card.defaultProps = {};

export default Card;
