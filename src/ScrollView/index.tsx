import React from 'react';
import { FlatList, ScrollView, ScrollViewProps } from 'react-native';

const VirtualizedView: ScrollViewProps = props => {
  return (
    <ScrollView {...props}>
      <FlatList
        data={[]}
        horizontal
        scrollEnabled={false}
        keyExtractor={(e, i) => 'random' + i.toString()}
        ListEmptyComponent={null}
        renderItem={null}
        ListHeaderComponent={() => (
          <>{props.children}</>
        )}
      />
    </ScrollView>
  );
};

export default VirtualizedView;
