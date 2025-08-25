import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Increment = ({ increase }) => <Button title="Add" onPress={increase} />;

function App() {
  const [total, setTotal] = useState(0);

  return (
    <View style={{ padding: 20 }}>
      <Text>Total : {total}</Text>
      <Increment increase={() => setTotal(total + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;
