/**
 *
 * TextGroup Test
 * @format
 * @flow
 *
 */


import React from 'react';
import renderer from 'react-test-renderer';

import TextGroup from '../TextGroup';

test('TextGroup', () => {
  const tree = renderer
    .create(
      <TextGroup />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
