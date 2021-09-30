/**
 *
 * TextGroup
 * @format
 * @flow
 *
 */

import React from 'react';
import {View} from 'react-native';

import Text from '@atoms/Text';

import type {PropsType} from './types';

function TextGroup(props: PropsType): React.ReactElement {
  const {containerStyle, title, titleStyle, subtitle, subtitleStyle} = props;

  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>{title}</Text>
      {subtitle !== undefined && <Text style={subtitleStyle}>{subtitle}</Text>}
    </View>
  );
}

export default TextGroup;
