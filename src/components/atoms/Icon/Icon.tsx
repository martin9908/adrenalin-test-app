/**
 *
 * Icon
 * @format
 * @flow
 *
 */

import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import type {PropsType} from './types';

function Icon(props: PropsType): React.ReactElement {
  const {name, size, color, style} = props;

  return (
    <>
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={color}
        style={style}
      />
    </>
  );
}

export default Icon;
