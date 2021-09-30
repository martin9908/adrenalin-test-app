/**
 *
 * BlankPage Test
 * @format
 * @flow
 *
 */


import React from 'react';
import renderer from 'react-test-renderer';

import BlankPage from '../BlankPage';

test('BlankPage', () => {
  const tree = renderer
    .create(
      <BlankPage />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
