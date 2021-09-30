/**
 *
 * Header
 * @format
 * @flow
 *
 */

import React from 'react';
import {View} from 'react-native';

import TextIcon from '@molecules/TextIcon';

import HeaderStyles from './styles';
import type {PropsType} from './types';

function Header(props: PropsType): React.ReactElement {
  const {
    children,
    text,
    showLeft,
    leftIcon,
    leftButtonHandler,
    showRight,
    rightIcon,
    rightButtonHandler,
    marginStyle,
  } = props;

  return (
    <View style={HeaderStyles.container}>
      <TextIcon
        text={text}
        containerStyle={HeaderStyles.textIcon}
        textStyle={HeaderStyles.text}
        showLeft={showLeft}
        leftIcon={leftIcon}
        leftButtonHandler={leftButtonHandler}
        showRight={showRight}
        rightIcon={rightIcon}
        rightButtonHandler={rightButtonHandler}
      />
      {children}
      <View style={[HeaderStyles.margin, marginStyle]} />
    </View>
  );
}

export default Header;
