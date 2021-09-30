/**
 *
 * ImageSlider Test
 * @format
 * @flow
 *
 */


import React from 'react';
import renderer from 'react-test-renderer';

import ImageSlider from '../ImageSlider';

test('ImageSlider', () => {
  const tree = renderer
    .create(
      <ImageSlider />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
