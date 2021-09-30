/**
 *
 * HomePageLayout Test
 * @format
 * @flow
 *
 */


import React from 'react';
import renderer from 'react-test-renderer';

import HomePageLayout from '../HomePageLayout';

test('HomePageLayout', () => {
  const tree = renderer
    .create(
      <HomePageLayout />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
