/**
 *
 * @format
 * @flow
 *
 */

import {ScaledSheet} from 'react-native-size-matters';
import {SECONDARY_COLOR, WHITE} from '@colors';

const HeaderStyles = ScaledSheet.create({
  container: {
    marginTop: '80@s',
    marginHorizontal: '20@s',
  },
  textIcon: {
    marginBottom: '19@s',
  },
  margin: {
    width: '32@s',
    height: '2@s',
    backgroundColor: SECONDARY_COLOR,
  },
  text: {
    fontWeight: '700',
    fontSize: 34,
    color: WHITE,
  },
});

export default HeaderStyles;
