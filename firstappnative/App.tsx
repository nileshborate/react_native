import { useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

function App() {
  const data = ['Apple', 'Banana', 'Cherry', 'Dates'];
  return (
    <View style={{ paddingTop: 60 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Text style={{ padding: 12, fontSize: 16 }}>{item}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;
