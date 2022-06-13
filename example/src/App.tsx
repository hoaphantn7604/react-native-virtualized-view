import * as React from 'react';

import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text>react-native-virtualized-view</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
