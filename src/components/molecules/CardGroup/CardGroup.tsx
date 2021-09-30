/**
 *
 * CardGroup
 * @format
 * @flow
 *
 */

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import Icon from '@atoms/Icon';

import CardGroupStyles from './styles';
import type {PropsType, CardType} from './types';

const Item = ({data}: CardType, onPressHandler: () => void) => {
  return (
    <View style={[CardGroupStyles.container]}>
      <View style={[CardGroupStyles.row]}>
        {data.map(value => {
          const {id, bgColor, title, iconName, iconSize, iconColor} = value;
          return (
            <TouchableOpacity
              key={id}
              style={[CardGroupStyles.card, {backgroundColor: bgColor}]}
              onPress={onPressHandler}>
              <Text style={[CardGroupStyles.text]}>{title}</Text>
              <Icon name={iconName} size={iconSize} color={iconColor} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

function CardGroup(props: PropsType): React.ReactElement {
  const {data, onPressHandler} = props;

  return <Item data={data} onPressHandler={onPressHandler} />;
}

export default CardGroup;
