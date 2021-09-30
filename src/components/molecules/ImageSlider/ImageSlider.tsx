/**
 *
 * ImageSlider
 * @format
 * @flow
 *
 */

import React from 'react';
import {Image, View, Text} from 'react-native';

import List from '@atoms/List';

import ImageSliderStyles from './styles';
import type {PropsType} from './types';

const Item = (data, containerStyle, imageStyle) => {
  const {item} = data;
  const {source} = item;

  return (
    <View style={[ImageSliderStyles.container, containerStyle]}>
      <Image style={[ImageSliderStyles.image, imageStyle]} source={source} />
    </View>
  );
};

function ImageSlider(props: PropsType): React.ReactElement {
  const {data, containerStyle, imageStyle, horizontal, showScrollBar} = props;

  return (
    <List
      data={data}
      horizontal={horizontal}
      showScrollBar={showScrollBar}
      Item={item => Item(item, containerStyle, imageStyle)}
    />
  );
}

ImageSlider.defaultProps = {};

export default ImageSlider;
