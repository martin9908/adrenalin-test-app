/**
 *
 * TextIcon
 * @format
 * @flow
 *
 */

import React from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';

import Text from '@atoms/Text';

import TextIconStyles from './styles';
import type {PropsType} from './types';

function TextIcon(props: PropsType): React.ReactElement {
  const {
    containerStyle,
    text,
    textStyle,
    showLeft,
    leftIcon,
    leftButtonHandler,
    showRight,
    rightIcon,
    rightButtonHandler,
  } = props;

  return (
    <View style={[TextIconStyles.container, containerStyle]}>
      {showLeft && (
        <IconButton
          style={TextIconStyles.icon}
          icon={leftIcon}
          color="white"
          size={24}
          onPress={leftButtonHandler}
        />
      )}
      {text !== undefined && <Text style={textStyle}>{text}</Text>}
      {showRight && (
        <IconButton
          icon={rightIcon}
          color="white"
          size={24}
          onPress={rightButtonHandler}
        />
      )}
    </View>
  );
}

TextIcon.defaultProps = {};

export default TextIcon;
