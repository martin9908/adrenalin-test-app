/**
 *
 * DetailPage
 * @format
 * @flow
 *
 */

import React from 'react';
import {View, Text} from 'react-native';

import DetailPageLayout from '@layouts/DetailPageLayout';

import DetailPageConfig from './config';

import DetailPageStyles from './styles';
import type {PropsType} from './types';

function DetailPage(props: PropsType): React.ReactElement {
  const {navigation, route} = props;
  const data = route.params.props.data || {};

  const goBack = () => {
    navigation.goBack('Home');
  };

  return (
    <>
      <DetailPageLayout onPressBack={goBack} data={data} />
    </>
  );
}

DetailPage.defaultProps = {};

export default DetailPage;
