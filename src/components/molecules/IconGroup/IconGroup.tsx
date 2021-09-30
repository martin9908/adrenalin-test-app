/**
 *
 * IconGroup
 * @format
 * @flow
 *
 */

import React from 'react';
import {View} from 'react-native';

import Icon from '@atoms/Icon';

import IconGroupStyles from './styles';

import type {PropsType} from './types';

function IconGroup(props: PropsType): React.ReactElement {
  const {containerStyle, iconStyle, iconType, data} = props;

  const iconSize = iconType === 'small' ? 20 : 23;

  return (
    <View style={containerStyle}>
      {data.map(value => {
        const {id, name, size, color} = value;

        return (
          <View style={iconStyle}>
            <Icon
              key={id}
              name={name}
              size={iconType ? iconSize : size}
              color={color}
              style={!iconType && IconGroupStyles.icon}
            />
          </View>
        );
      })}
    </View>
  );
}

IconGroup.defaultProps = {};

export default IconGroup;
