import { useRef, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';

function App() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(
    Array.from({ length: 5 }, (_, i) => `Row ${i + 1}`),
  );
  const Sep = () => (
    <View
      style={{ height: 1, backgroundColor: '#eee', marginHorizontal: 12 }}
    />
  );
  const Empty = () => (
    <Text style={{ textAlign: 'center', marginTop: 40 }}>No items found</Text>
  );

  const refresh = async () => {
    setRefreshing(true);
    await new Promise(r => setTimeout(r, 800));
    setData(arr => [...arr, `Row ${arr.length + 1}`]);
    setRefreshing(false);
  };
  return (
    <View style={{ paddingTop: 60 }}>
      <FlatList
        data={data}
        ItemSeparatorComponent={Sep}
        ListEmptyComponent={Empty}
        ListHeaderComponent={
          <Text style={{ padding: 12, fontSize: 18, fontWeight: '700' }}>
            Header
          </Text>
        }
        ListFooterComponent={
          <Text style={{ padding: 12, textAlign: 'center' }}>— End —</Text>
        }
        renderItem={({ item }) => {
          return <Text style={{ padding: 12, fontSize: 16 }}>{item}</Text>;
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        numColumns={3}
        keyExtractor={x => x + 1}
        columnWrapperStyle={{ gap: 30 }}
        contentContainerStyle={{ gap: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;
