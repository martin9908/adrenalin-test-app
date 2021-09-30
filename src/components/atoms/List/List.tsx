/**
 *
 * List
 * @format
 * @flow
 *
 */

import React from 'react';
import {View, FlatList} from 'react-native';

import type {PropsType} from './types';

function List(props: PropsType): React.ReactElement {
  const {
    data,
    containerStyle,
    horizontal,
    numColumns,
    scrollEnabled,
    showScrollBar,
    Item,
  } = props;

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  return (
    <View style={containerStyle}>
      <FlatList
        data={data}
        numColumns={numColumns}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={horizontal}
        scrollEnabled={scrollEnabled}
        showsHorizontalScrollIndicator={showScrollBar}
      />
    </View>
  );
}

export default List;
