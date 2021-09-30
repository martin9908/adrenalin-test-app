/**
 *
 * @format
 * @flow
 *
 */

import {CARD_SHADOW} from '@colors';

import {ScaledSheet} from 'react-native-size-matters';

const CardGroupStyles = ScaledSheet.create({
  container: {
    padding: '10@s',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: '-15@s',
  },
  card: {
    height: '125@s',
    width: '148@s',
    borderRadius: '20@s',
    paddingVertical: '22@s',
    paddingHorizontal: '24@s',
    marginRight: '16@s',
    justifyContent: 'space-between',
    marginBottom: '16@s',
    shadowColor: CARD_SHADOW,
    shadowOffset: {width: 2, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default CardGroupStyles;
