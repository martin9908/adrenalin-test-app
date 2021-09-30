/**
 *
 * ImageCard Test
 * @format
 * @flow
 *
 */


import React from 'react';
import renderer from 'react-test-renderer';

import ImageCard from '../ImageCard';

test('ImageCard', () => {
  const tree = renderer
    .create(
      <ImageCard />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
