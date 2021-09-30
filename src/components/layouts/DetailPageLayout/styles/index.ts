/**
 *
 * @format
 * @flow
 *
 */

import {BLACK, WHITE, PRIMARY_DARK, SECONDARY_COLOR} from '@colors';

import {ScaledSheet} from 'react-native-size-matters';

const textStyles = {
  color: 'white',
  marginLeft: '10@s',
};

const DetailPageLayoutStyles = ScaledSheet.create({
  container: {
    backgroundColor: BLACK,
    paddingBottom: '110@s',
  },
  headerContent: {
    marginLeft: '-10@s',
  },
  iconContainer: {
    marginTop: '41@s',
    marginLeft: '10@s',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: PRIMARY_DARK,
    height: '56@s',
    width: '56@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '16@s',
    marginBottom: '20@s',
    borderRadius: 10,
  },
  title: {
    ...textStyles,
    marginBottom: '17@s',
    fontWeight: '700',
    fontSize: 34,
  },
  subtitle: {
    ...textStyles,
    fontSize: 16,
  },
  contentContainer: {
    marginTop: '22@s',
    marginHorizontal: '20@s',
    paddingBottom: '120@s',
  },
  content: {
    color: WHITE,
    fontSize: 18,
  },
  button: {
    position: 'absolute',
    bottom: '20@s',
    width: '316@s',
    height: '56@s',
    alignSelf: 'center',
    borderRadius: '16@s',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SECONDARY_COLOR,
  },
  buttonText: {
    color: WHITE,
    fontWeight: '700',
    fontSize: 17,
  },
});

export default DetailPageLayoutStyles;
