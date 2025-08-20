import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('App loaded');
  }, []);

  useEffect(() => {
    console.log('Count Changed :', count);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Count : {count} </Text>
      <Button title="Add" onPress={() => setCount(count + 1)} />
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
