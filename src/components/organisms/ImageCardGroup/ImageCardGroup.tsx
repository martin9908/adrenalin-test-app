/**
 *
 * ImageCardGroup
 * @format
 * @flow
 *
 */

import React from 'react';

import List from '@atoms/List';
import ImageCard from '@organisms/ImageCard';

import type {PropsType} from './types';

const Item = (data, onPress: (title: string) => void) => {
  const {item} = data;
  const {
    id,
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
  } = item;

  const onPressHandler = () => {
    onPress(item);
  };

  return (
    <ImageCard
      key={id}
      containerStyle={containerStyle}
      image={image}
      resizeMode={resizeMode}
      textContainerStyle={textContainerStyle}
      imageStyle={imageStyle}
      title={title}
      titleStyle={titleStyle}
      subtitle={subtitle}
      subtitleStyle={subtitleStyle}
      iconData={iconData}
      showIcon={showIcon}
      onPressHandler={onPressHandler}
    />
  );
};

function ImageCardGroup(props: PropsType): React.ReactElement {
  const {data, horizontal, showScrollBar, onPressHandler} = props;

  return (
    <List
      data={data}
      horizontal={horizontal}
      showScrollBar={showScrollBar}
      Item={item => Item(item, onPressHandler)}
    />
  );
}

ImageCardGroup.defaultProps = {};

export default ImageCardGroup;
