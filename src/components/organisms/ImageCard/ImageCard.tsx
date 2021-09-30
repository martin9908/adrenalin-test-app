/**
 *
 * ImageCard
 * @format
 * @flow
 *
 */

import React from 'react';
import {TouchableOpacity, ImageBackground} from 'react-native';

import IconGroup from '@molecules/IconGroup';
import TextGroup from '@molecules/TextGroup';

import ImageCardStyles from './styles';
import type {PropsType} from './types';

function ImageCard(props: PropsType): React.ReactElement {
  const {
    containerStyle,
    image,
    resizeMode,
    imageStyle,
    textContainerStyle,
    title,
    titleStyle,
    subtitle,
    subtitleStyle,
    iconData,
    showIcon,
    onPressHandler,
  } = props;

  return (
    <TouchableOpacity onPress={onPressHandler} style={containerStyle}>
      <ImageBackground
        source={image}
        resizeMode={resizeMode}
        style={imageStyle}>
        <TextGroup
          containerStyle={textContainerStyle}
          title={title}
          titleStyle={titleStyle}
          subtitle={subtitle}
          subtitleStyle={subtitleStyle}
        />
        {showIcon && (
          <IconGroup
            containerStyle={ImageCardStyles.iconContainer}
            data={iconData}
          />
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default ImageCard;
