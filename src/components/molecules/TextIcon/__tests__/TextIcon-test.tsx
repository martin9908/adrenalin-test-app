/**
 *
 * TextIcon Test
 * @format
 * @flow
 *
 */


import React from 'react';
import renderer from 'react-test-renderer';

import TextIcon from '../TextIcon';

test('TextIcon', () => {
  const tree = renderer
    .create(
      <TextIcon />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
