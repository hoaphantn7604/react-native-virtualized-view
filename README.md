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

<br><p><a href="https://www.buymeacoffee.com/hoaphantn"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="fateh999" /></a></p><br><br><br>

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
