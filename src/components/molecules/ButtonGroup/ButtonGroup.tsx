/**
 *
 * ButtonGroup
 * @format
 * @flow
 *
 */

import React from 'react';
import {View, FlatList} from 'react-native';

import Button from '@atoms/Button';
import List from '@atoms/List';
import Text from '@atoms/Text';

import type {PropsType, buttonProps} from './types';

const Item = ({item}: buttonProps) => {
  const {
    title,
    textStyle,
    buttonStyle,
    buttonContainerStyle,
    buttonColor,
    buttonType,
    onPress,
  } = item;

  return (
    <View>
      <Button
        onPress={onPress}
        buttonStyle={buttonStyle}
        buttonContentStyle={buttonContainerStyle}
        labelColor={buttonColor}
        variation={buttonType}
        uppercase={false}>
        <Text style={textStyle}>{title}</Text>
      </Button>
    </View>
  );
};

function ButtonGroup(props: PropsType): React.ReactElement {
  const {buttonData, containerStyle, horizontal, showScrollBar} = props;

  return (
    <List
      data={buttonData}
      containerStyle={containerStyle}
      horizontal={horizontal}
      showScrollBar={showScrollBar}
      Item={Item}
    />
  );
}

export default ButtonGroup;
