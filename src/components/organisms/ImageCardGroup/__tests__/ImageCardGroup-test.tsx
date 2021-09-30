/**
 *
 * ImageCardGroup Test
 * @format
 * @flow
 *
 */


import React from 'react';
import renderer from 'react-test-renderer';

import ImageCardGroup from '../ImageCardGroup';

test('ImageCardGroup', () => {
  const tree = renderer
    .create(
      <ImageCardGroup />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
