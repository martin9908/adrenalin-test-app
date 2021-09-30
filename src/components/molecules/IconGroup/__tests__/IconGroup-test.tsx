/**
 *
 * IconGroup Test
 * @format
 * @flow
 *
 */


import React from 'react';
import renderer from 'react-test-renderer';

import IconGroup from '../IconGroup';

test('IconGroup', () => {
  const tree = renderer
    .create(
      <IconGroup />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
