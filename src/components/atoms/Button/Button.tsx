/**
 *
 * Button
 * @format
 * @flow
 *
 */

import React from 'react';
import {Button as RnButton} from 'react-native-paper';

import ButtonStyles from './styles';
import PropsType from './types';

function Button(props: PropsType): React.ReactElement {
  const {
    buttonIcon,
    buttonStyle,
    buttonContentStyle,
    buttonTextStyle,
    buttonWidth,
    labelColor,
    children,
    compact,
    disabled,
    onPress,
    uppercase,
    variation,
  } = props;

  return (
    <RnButton
      icon={buttonIcon}
      style={buttonStyle}
      contentStyle={[
        ButtonStyles.generalButtonContentStyle,
        buttonContentStyle,
      ]}
      labelStyle={buttonTextStyle}
      buttonWidth={buttonWidth}
      color={labelColor}
      compact={!!compact}
      disabled={disabled}
      onPress={onPress}
      uppercase={uppercase}
      mode={variation}>
      {children}
    </RnButton>
  );
}

Button.defaultProps = {
  onPress: () => null,
};

export default Button;
