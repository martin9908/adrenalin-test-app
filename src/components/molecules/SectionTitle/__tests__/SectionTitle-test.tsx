/**
 *
 * SectionTitle Test
 * @format
 * @flow
 *
 */


import React from 'react';
import renderer from 'react-test-renderer';

import SectionTitle from '../SectionTitle';

test('SectionTitle', () => {
  const tree = renderer
    .create(
      <SectionTitle />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
