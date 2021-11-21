import React from 'react';
import { FlatList } from 'react-native';
import { Props } from './model';

const ScrollViewComponent: Props = props => {
  return (
    <FlatList
      {...props}
      data={[]}
      keyExtractor={(e, i) => 'dom' + i.toString()}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => (
        <>{props.children}</>
      )}
    />
  );
};

export default ScrollViewComponent;
