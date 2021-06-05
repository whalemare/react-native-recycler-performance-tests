import React, {Profiler, useCallback, useMemo} from 'react';
import {Dimensions} from 'react-native';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import {Cell} from './Cell';
import {Data} from './Data';

interface RecyclerProps {
  items: Data[];
}

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export const Recycler: React.FC<RecyclerProps> = ({items}) => {
  const layoutProvider = useMemo(() => {
    return new LayoutProvider(
      () => {
        return 1;
      },
      (_, dimension) => {
        dimension.width = screenWidth;
        dimension.height = screenHeight / 6;
      },
    );
  }, []);

  const provider = useMemo(() => {
    return new DataProvider(
      (left, right) => {
        return left !== right;
      },
      index => {
        // TODO: should be fetched from data
        return 'id:' + index;
      },
    );
  }, []);

  const dataProvider = useMemo(() => {
    return provider.cloneWithRows(items);
  }, [items, provider]);

  const renderItem = useCallback((type, data) => {
    return (
      <Profiler
        id={data.text}
        onRender={(id, phase, duration) => {
          console.log('onRender', {id, phase, duration});
        }}>
        <Cell heavy={5} item={data} />
      </Profiler>
    );
  }, []);

  return (
    <RecyclerListView
      layoutProvider={layoutProvider}
      dataProvider={dataProvider}
      rowRenderer={renderItem}
      onEndReached={() => {
        console.log('onEndReached');
      }}
    />
  );
};
