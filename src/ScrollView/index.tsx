import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Props } from './model';

const ScrollViewComponent: Props = props => {
  return (
    <FlatList
      style={props.style}
      data={[]}
      keyExtractor={(e, i) => 'dom' + i.toString()}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => (
        <ScrollView {...props} style={{}}>{props.children}</ScrollView>
      )}
    />
  );
};

export default ScrollViewComponent;
