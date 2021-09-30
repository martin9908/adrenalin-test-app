/**
 *
 * @format
 * @flow
 *
 */

import {BLACK, WHITE, GREY, SECONDARY_COLOR} from '@colors';

import {ScaledSheet} from 'react-native-size-matters';

const sectionTitle = {
  fontSize: 14,
  color: GREY,
  marginTop: 9,
  marginLeft: '20@s',
};

const HomePageLayoutStyles = ScaledSheet.create({
  container: {
    backgroundColor: BLACK,
    paddingBottom: '110@s',
  },
  buttonGroupContainer: {
    marginTop: '20@s',
    marginLeft: '20@s',
  },
  buttonContainerStyle: {
    height: '40@s',
  },
  buttonStyle: {
    marginRight: '8@s',
    borderRadius: '12@s',
  },
  textStyle: {
    fontWeight: '400',
    color: WHITE,
  },
  sectionTitleStyle: {
    ...sectionTitle,
  },
  buttonTitleStyle: {
    fontSize: 14,
    color: SECONDARY_COLOR,
  },
  imageContainerStyle: {
    width: '274@s',
    height: '176@s',
    marginTop: '-15@s',
    marginLeft: '-10@s',
    marginRight: '-30@s',
  },
  imageBackgroundStyle: {
    width: '274@s',
    height: '176@s',
  },
  textContainerStyle: {
    paddingTop: '32@s',
    paddingHorizontal: '42@s',
  },
  imageTitleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  imageSubtitleStyle: {
    color: 'white',
  },
  storiesTitleStyle: {
    ...sectionTitle,
    marginTop: '-23@s',
  },
});

export default HomePageLayoutStyles;
