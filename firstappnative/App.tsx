import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function App() {
  const [count, setCount] = useState(0);

  const buttonAction = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Count : {count}</Text>
      <Button title="Increment" onPress={buttonAction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
