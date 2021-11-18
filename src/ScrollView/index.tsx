import React from 'react';
import { FlatList, ScrollView, View, Dimensions } from 'react-native';
import { VirtualizedViewProps } from './model';

const { width } = Dimensions.get('window');

const VirtualizedView: VirtualizedViewProps = props => {
  const { style } = props;
  return (
    <ScrollView {...props} style={{}}>
      <FlatList
        data={[]}
        horizontal
        scrollEnabled={false}
        keyExtractor={(e, i) => 'dom' + i.toString()}
        ListEmptyComponent={null}
        renderItem={null}
        ListHeaderComponent={() => (
          <View style={[{ width: width }, style]}>{props.children}</View>
        )}
      />
    </ScrollView>
  );
};

export default VirtualizedView;
