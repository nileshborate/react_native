import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function App() {
  const [items, setItems] = useState(['A', 'B']);
  return (
    <View style={{ padding: 20 }}>
      {items.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
      <Button
        onPress={() => setItems([...items, `X${items.length + 1}`])}
        title="Add Item"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;
