/**
 *
 * @format
 * @flow
 *
 */

import {
  WHITE,
  SECONDARY_COLOR,
  PRIMARY_DARK,
  PURPLE,
  TEAL,
  CORAL,
} from '@colors';
import HomePageLayoutStyles from '../styles';

export const HEADER_TEXT = 'Discover';
export const RIGHT_ICON = 'magnify';
export const BUTTON_DATA = [
  {
    id: '123456',
    title: 'Nature',
    buttonType: 'contained',
    textStyle: HomePageLayoutStyles.textStyle,
    buttonStyle: HomePageLayoutStyles.buttonStyle,
    buttonContainerStyle: HomePageLayoutStyles.buttonContainerStyle,
    buttonColor: SECONDARY_COLOR,
    onPress: () => {
      console.log('Nature');
    },
  },
  {
    id: '1234567',
    title: 'Cities',
    buttonType: 'contained',
    textStyle: HomePageLayoutStyles.textStyle,
    buttonStyle: HomePageLayoutStyles.buttonStyle,
    buttonContainerStyle: HomePageLayoutStyles.buttonContainerStyle,
    buttonColor: PRIMARY_DARK,
    onPress: () => {
      console.log('Cities');
    },
  },
  {
    id: '12345678',
    title: 'History',
    buttonType: 'contained',
    textStyle: HomePageLayoutStyles.textStyle,
    buttonStyle: HomePageLayoutStyles.buttonStyle,
    buttonContainerStyle: HomePageLayoutStyles.buttonContainerStyle,
    buttonColor: PRIMARY_DARK,
    onPress: () => {
      console.log('History');
    },
  },
  {
    id: '123456789',
    title: 'Food & Drink',
    buttonType: 'contained',
    textStyle: HomePageLayoutStyles.textStyle,
    buttonStyle: HomePageLayoutStyles.buttonStyle,
    buttonContainerStyle: HomePageLayoutStyles.buttonContainerStyle,
    buttonColor: PRIMARY_DARK,
    onPress: () => {
      console.log('Food & Drink');
    },
  },
  {
    id: '1234567890',
    title: 'Experiences',
    buttonType: 'contained',
    textStyle: HomePageLayoutStyles.textStyle,
    buttonStyle: HomePageLayoutStyles.buttonStyle,
    buttonContainerStyle: HomePageLayoutStyles.buttonContainerStyle,
    buttonColor: PRIMARY_DARK,
    onPress: () => {
      console.log('Experiences');
    },
  },
];
const iconData = [
  {
    id: '000000',
    name: 'headphones',
    size: 19,
    color: WHITE,
  },
  {
    id: '000001',
    name: 'movie-roll',
    size: 19,
    color: WHITE,
  },
];

const imageData = [
  {
    id: '000',
    source: require('@assets/images/mountain_detail.png'),
  },
  {
    id: '001',
    source: require('@assets/images/mountain_detail.png'),
  },
  {
    id: '002',
    source: require('@assets/images/mountain_detail.png'),
  },
];
export const IMAGE_CARD = [
  {
    id: '00000000',
    containerStyle: HomePageLayoutStyles.imageContainerStyle,
    image: require('@assets/images/mountain.png'),
    resizeMode: 'stretch',
    textContainerStyle: HomePageLayoutStyles.textContainerStyle,
    imageStyle: HomePageLayoutStyles.imageBackgroundStyle,
    title: 'Mountains',
    titleStyle: HomePageLayoutStyles.imageTitleStyle,
    subtitle: 'Be on top of the world...',
    subtitleStyle: HomePageLayoutStyles.imageSubtitleStyle,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum leo. Etiam pretium turpis ullamcorper tortor facilisis, id rhoncus magna dignissim. Ut faucibus finibus mi, eu mollis mauris gravida vel. Suspendisse potenti. Etiam consectetur, ipsum a lobortis pulvinar, sapien augue congue arcu, a mattis ante tellus nec magna. Mauris ut interdum nisi.
    \n

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum leo. Etiam pretium turpis ullamcorper tortor facilisis, id rhoncus magna dignissim. Ut faucibus finibus mi, eu mollis mauris gravida vel. Suspendisse potenti. Etiam consectetur, ipsum a lobortis pulvinar, sapien augue congue arcu, a mattis ante tellus nec magna. Mauris ut interdum nisi.
    

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum leo. Etiam pretium turpis ullamcorper tortor facilisis, id rhoncus magna dignissim. Ut faucibus finibus mi, eu mollis mauris gravida vel. Suspendisse potenti. Etiam consectetur, ipsum a lobortis pulvinar, sapien augue congue arcu, a mattis ante tellus nec magna. Mauris ut interdum nisi.`,
    iconData,
    imageData,
    showIcon: true,
  },
  {
    id: '00000001',
    containerStyle: HomePageLayoutStyles.imageContainerStyle,
    image: require('@assets/images/mountain.png'),
    resizeMode: 'stretch',
    textContainerStyle: HomePageLayoutStyles.textContainerStyle,
    imageStyle: HomePageLayoutStyles.imageBackgroundStyle,
    title: 'Mountains',
    titleStyle: HomePageLayoutStyles.imageTitleStyle,
    subtitle: 'Be on top of the world...',
    subtitleStyle: HomePageLayoutStyles.imageSubtitleStyle,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum leo. Etiam pretium turpis ullamcorper tortor facilisis, id rhoncus magna dignissim. Ut faucibus finibus mi, eu mollis mauris gravida vel. Suspendisse potenti. Etiam consectetur, ipsum a lobortis pulvinar, sapien augue congue arcu, a mattis ante tellus nec magna. Mauris ut interdum nisi.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum leo. Etiam pretium turpis ullamcorper tortor facilisis, id rhoncus magna dignissim. Ut faucibus finibus mi, eu mollis mauris gravida vel. Suspendisse potenti. Etiam consectetur, ipsum a lobortis pulvinar, sapien augue congue arcu, a mattis ante tellus nec magna. Mauris ut interdum nisi.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum leo. Etiam pretium turpis ullamcorper tortor facilisis, id rhoncus magna dignissim. Ut faucibus finibus mi, eu mollis mauris gravida vel. Suspendisse potenti. Etiam consectetur, ipsum a lobortis pulvinar, sapien augue congue arcu, a mattis ante tellus nec magna. Mauris ut interdum nisi.',
    iconData,
    imageData,
    showIcon: true,
  },
  {
    id: '00000002',
    containerStyle: HomePageLayoutStyles.imageContainerStyle,
    image: require('@assets/images/mountain.png'),
    resizeMode: 'stretch',
    textContainerStyle: HomePageLayoutStyles.textContainerStyle,
    imageStyle: HomePageLayoutStyles.imageBackgroundStyle,
    title: 'Mountains',
    titleStyle: HomePageLayoutStyles.imageTitleStyle,
    subtitle: 'Be on top of the world...',
    subtitleStyle: HomePageLayoutStyles.imageSubtitleStyle,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum leo. Etiam pretium turpis ullamcorper tortor facilisis, id rhoncus magna dignissim. Ut faucibus finibus mi, eu mollis mauris gravida vel. Suspendisse potenti. Etiam consectetur, ipsum a lobortis pulvinar, sapien augue congue arcu, a mattis ante tellus nec magna. Mauris ut interdum nisi.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum leo. Etiam pretium turpis ullamcorper tortor facilisis, id rhoncus magna dignissim. Ut faucibus finibus mi, eu mollis mauris gravida vel. Suspendisse potenti. Etiam consectetur, ipsum a lobortis pulvinar, sapien augue congue arcu, a mattis ante tellus nec magna. Mauris ut interdum nisi.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum leo. Etiam pretium turpis ullamcorper tortor facilisis, id rhoncus magna dignissim. Ut faucibus finibus mi, eu mollis mauris gravida vel. Suspendisse potenti. Etiam consectetur, ipsum a lobortis pulvinar, sapien augue congue arcu, a mattis ante tellus nec magna. Mauris ut interdum nisi.',
    iconData,
    imageData,
    showIcon: true,
  },
];

export const CARD_DATA = [
  {
    id: '000000001',
    title: 'A day at the Dolomites',
    bgColor: PURPLE,
    iconName: 'movie-roll',
    iconSize: 19,
    iconColor: WHITE,
    showIcon: true,
  },
  {
    id: '000000002',
    title: 'Descending Everest',
    bgColor: SECONDARY_COLOR,
    iconName: 'headphones',
    iconSize: 19,
    iconColor: WHITE,
    showIcon: true,
  },
  {
    id: '000000003',
    title: 'Sacred land of the Incas',
    bgColor: TEAL,
    iconName: 'headphones',
    iconSize: 19,
    iconColor: WHITE,
    showIcon: true,
  },
  {
    id: '000000004',
    title: 'Faschinating Mount Fuji',
    bgColor: CORAL,
    iconName: 'movie-roll',
    iconSize: 19,
    iconColor: WHITE,
    showIcon: true,
  },
  {
    id: '000000005',
    title: 'A day at the Dolomites',
    bgColor: PURPLE,
    iconName: 'movie-roll',
    iconSize: 19,
    iconColor: WHITE,
    showIcon: true,
  },
  {
    id: '000000006',
    title: 'Descending Everest',
    bgColor: SECONDARY_COLOR,
    iconName: 'headphones',
    iconSize: 19,
    iconColor: WHITE,
    showIcon: true,
  },
  {
    id: '000000007',
    title: 'Sacred land of the Incas',
    bgColor: TEAL,
    iconName: 'headphones',
    iconSize: 19,
    iconColor: WHITE,
    showIcon: true,
  },
  {
    id: '000000008',
    title: 'Faschinating Mount Fuji',
    bgColor: CORAL,
    iconName: 'movie-roll',
    iconSize: 19,
    iconColor: WHITE,
    showIcon: true,
  },
];
