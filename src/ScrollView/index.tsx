import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { VirtualizedViewProps } from './model';

const VirtualizedView: VirtualizedViewProps = props => {
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
          <FlatList
            data={[]}
            scrollEnabled={false}
            keyExtractor={(e, i) => 'dom' + i.toString()}
            ListEmptyComponent={null}
            renderItem={null}
            ListHeaderComponent={() => (
              <>{props.children}</>
            )}
          />
        )}
      />
    </ScrollView>
  );
};

export default VirtualizedView;
