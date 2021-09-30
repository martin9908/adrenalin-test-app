/**
 *
 * Text
 * @format
 * @flow
 *
 */

import React from 'react';

import {Text as RNText} from 'react-native-paper';

import TextStyles from './styles';
import type {PropsType} from './types';

function Text(props: PropsType): React.ReactElement {
  const {style, children, ...rest} = props;

  return (
    <>
      <RNText {...rest} style={[style, TextStyles]}>
        {children}
      </RNText>
    </>
  );
}

Text.defaultProps = {};

export default Text;
