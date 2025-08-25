import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Actions = ({ increment, reset }) => (
  <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
    <Button title="Add" onPress={increment} />
    <Button title="Reset" onPress={reset} />
  </View>
);

function App() {
  const [total, setTotal] = useState(0);

  return (
    <View style={{ padding: 20 }}>
      <Text>Total : {total}</Text>
      <Actions
        increment={() => setTotal(total + 1)}
        reset={() => setTotal(0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;
