import React from 'react';
import {StyleProp, ViewStyle, View, Text} from 'react-native';
import {Data} from './Data';

interface CellProps {
  style?: StyleProp<ViewStyle>;
  item: Data;
  heavy?: 5 | 20 | 250;
}

let cellRenderedTimes = 0;

export const Cell: React.FC<CellProps> = ({style, item, heavy}) => {
  if (heavy === 5) {
    // 5ms
    for (let i = 0; i < 1e7; i++) {}
  } else if (heavy === 20) {
    // 20ms
    for (let i = 0; i < 1e7; i++) {}
    for (let i = 0; i < 1e7; i++) {}
    for (let i = 0; i < 1e7; i++) {}
    for (let i = 0; i < 1e7; i++) {}
    for (let i = 0; i < 1e7; i++) {}
  } else if (heavy === 250) {
    // 250ms
    for (let i = 0; i < 1e9; i++) {}
  }

  cellRenderedTimes++;
  console.log(
    'cellRenderedTimes',
    cellRenderedTimes,
    `via ${item.text} and ${item.color}`,
  );

  return (
    <View
      style={[
        style,
        {
          flex: 1,
          alignItems: 'center',
          backgroundColor: item.color,
        },
      ]}>
      <Text>{item.text}</Text>
    </View>
  );
};
