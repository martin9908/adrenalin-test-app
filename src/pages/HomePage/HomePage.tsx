/**
 *
 * HomePage
 * @format
 * @flow
 *
 */

import React, {useContext} from 'react';

import {ApplicationContext} from '@contexts/Application';
import HomePageLayout from '@layouts/HomePageLayout';

import type {PropsType} from './types';

function HomePage(props: PropsType): React.ReactElement {
  const {navigation} = props;

  const {selected, searchButtonHandler} = useContext(ApplicationContext);

  const navigateToDetails = data => {
    navigation.navigate('Detail', {
      screen: 'DetailPage',
      props: {data},
    });
  };

  return (
    <>
      <HomePageLayout
        rightButtonHandler={searchButtonHandler}
        navigateToDetails={navigateToDetails}
        selected={selected}
      />
    </>
  );
}

HomePage.defaultProps = {};

export default HomePage;
