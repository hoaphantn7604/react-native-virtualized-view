# react-native-virtualized-view
When Flatlist inside Scrollview, will have a warning:
<br>
<br>
virtualizedlists should never be nested inside plain scrollviews with the same orientation because it can break windowing and other functionality - use another virtualizedlist-backed container instead.
<br>
<br>
react-native-virtualized-view will resolve this problem.
## Getting started
```js
    npm install react-native-virtualized-view --save
```
or
```js
    yarn add react-native-virtualized-view
```

## Usage
```javascript
  import { FlatList } from 'react-native';
  import { ScrollView } from 'react-native-virtualized-view';

  return (
    <ScrollView>
      <FlatList />
      <FlatList />
    </ScrollView>
  ) 
```
