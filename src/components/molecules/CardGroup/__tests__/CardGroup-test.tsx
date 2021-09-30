/**
 *
 * CardGroup Test
 * @format
 * @flow
 *
 */


import React from 'react';
import renderer from 'react-test-renderer';

import CardGroup from '../CardGroup';

test('CardGroup', () => {
  const tree = renderer
    .create(
      <CardGroup />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
