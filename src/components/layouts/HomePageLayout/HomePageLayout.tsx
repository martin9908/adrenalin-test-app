/**
 *
 * HomePageLayout
 * @format
 * @flow
 *
 */

import React from 'react';
import {ScrollView} from 'react-native';

import Header from '@organisms/Header';
import ButtonGroup from '@molecules/ButtonGroup';
import SectionTitle from '@molecules/SectionTitle';
import CardGroup from '@molecules/CardGroup';
import ImageCardGroup from '@organisms/ImageCardGroup';

import {
  HEADER_TEXT,
  RIGHT_ICON,
  IMAGE_CARD,
  BUTTON_DATA,
  CARD_DATA,
} from './config';

import HomePageLayoutStyles from './styles';
import type {PropsType} from './types';

function HomePageLayout(props: PropsType): React.ReactElement {
  const {selected, setSelected, rightButtonHandler, navigateToDetails} = props;

  return (
    <ScrollView style={HomePageLayoutStyles.container}>
      <Header
        text={HEADER_TEXT}
        rightIcon={RIGHT_ICON}
        showRight
        rightButtonHandler={rightButtonHandler}
      />
      <ButtonGroup
        buttonData={BUTTON_DATA}
        containerStyle={HomePageLayoutStyles.buttonGroupContainer}
        horizontal
        showScrollBar={false}
        onPress={setSelected}
      />
      <SectionTitle
        title="Highlights"
        titleStyle={HomePageLayoutStyles.sectionTitleStyle}
        buttonTitle="See All"
        buttonTitleStyle={HomePageLayoutStyles.buttonTitleStyle}
        showButton
      />
      <ImageCardGroup
        data={IMAGE_CARD}
        onPressHandler={navigateToDetails}
        horizontal
        showScrollBar
      />
      <SectionTitle
        title="Stories"
        titleStyle={HomePageLayoutStyles.storiesTitleStyle}
      />
      <CardGroup data={CARD_DATA} onPressHandler={setSelected} />
    </ScrollView>
  );
}

export default HomePageLayout;
