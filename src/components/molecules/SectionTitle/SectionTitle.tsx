/**
 *
 * SectionTitle
 * @format
 * @flow
 *
 */

import React from 'react';
import {View} from 'react-native';

import Text from '@atoms/Text';
import Button from '@atoms/Button';

import SectionTitleConfig from './config';

import SectionTitleStyles from './styles';
import type {PropsType} from './types';

function SectionTitle(props: PropsType): React.ReactElement {
  const {
    title,
    titleStyle,
    showButton,
    buttonTitle,
    buttonTitleStyle,
    buttonHandler,
  } = props;

  return (
    <View style={SectionTitleStyles.container}>
      <Text style={titleStyle}>{title}</Text>
      {showButton ? (
        <Button onPress={buttonHandler} uppercase={false}>
          <Text style={buttonTitleStyle}>{buttonTitle}</Text>
        </Button>
      ) : (
        <View />
      )}
    </View>
  );
}

SectionTitle.defaultProps = {};

export default SectionTitle;
