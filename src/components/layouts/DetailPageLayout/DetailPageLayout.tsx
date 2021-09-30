/**
 *
 * DetailPageLayout
 * @format
 * @flow
 *
 */

import React from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';

import Text from '@atoms/Text';
import Header from '@organisms/Header';
import IconGroup from '@molecules/IconGroup';
import ImageSlider from '@molecules/ImageSlider';
import TextGroup from '@molecules/TextGroup';

import DetailPageLayoutStyles from './styles';
import type {PropsType, DataType} from './types';

const CustomHeader = ({data}: DataType) => {
  const {title, subtitle, imageData, iconData} = data;

  return (
    <View style={DetailPageLayoutStyles.headerContent}>
      <TextGroup
        title={title}
        titleStyle={DetailPageLayoutStyles.title}
        subtitle={subtitle}
        subtitleStyle={DetailPageLayoutStyles.subtitle}
      />
      <ImageSlider data={imageData} horizontal />
      <IconGroup
        containerStyle={DetailPageLayoutStyles.iconContainer}
        iconStyle={DetailPageLayoutStyles.icon}
        iconType="medium"
        data={iconData}
      />
    </View>
  );
};

function DetailPageLayout(props: PropsType): React.ReactElement {
  const {onPressBack, data} = props;
  const {content} = data;

  return (
    <View>
      <ScrollView style={DetailPageLayoutStyles.container}>
        <Header
          leftIcon="arrow-left"
          leftButtonHandler={onPressBack}
          showLeft
          rightIcon="heart"
          showRight
          marginStyle={DetailPageLayoutStyles.header}>
          <CustomHeader data={data} />
        </Header>
        <View style={DetailPageLayoutStyles.contentContainer}>
          <Text style={DetailPageLayoutStyles.content}>{content}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={DetailPageLayoutStyles.button}>
        <Text style={DetailPageLayoutStyles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

DetailPageLayout.defaultProps = {};

export default DetailPageLayout;
