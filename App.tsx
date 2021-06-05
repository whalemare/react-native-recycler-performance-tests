/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useMemo, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Data} from './src/Data';
import {Recycler} from './src/Recycler';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(1);
  const items = useMemo(() => {
    return generateItems(count);
  }, [count]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}

      {/* <View style={{flex: 1}}>
      </View> */}

      <Recycler items={items} />

      <View style={{position: 'absolute', bottom: 34, start: 0, end: 0}}>
        <Button
          color={'red'}
          title={`Generate ${count + 100}`}
          onPress={() => {
            setCount(count + 100);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

function generateItems(count: number): Data[] {
  let arr = new Array<Data>(count);
  for (let i = 0; i < count; i++) {
    arr[i] = {
      text: `Item: ${i}`,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    };
  }
  return arr;
}

export default App;
