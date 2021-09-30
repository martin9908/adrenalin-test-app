/**
 *
 * DetailPageLayout Test
 * @format
 * @flow
 *
 */


import React from 'react';
import renderer from 'react-test-renderer';

import DetailPageLayout from '../DetailPageLayout';

test('DetailPageLayout', () => {
  const tree = renderer
    .create(
      <DetailPageLayout />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
