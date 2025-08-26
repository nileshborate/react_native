import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

function App() {
  const [log, setLog] = useState('Tap the box');

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.box, { opacity: pressed ? 0.7 : 1 }]}
        onPress={() => setLog('On Press')}
        onPressIn={() => setLog('On Press In')}
        onPressOut={() => setLog('On Press Out')}
        onLongPress={() => setLog('On Long Press')}
      >
        <Text>Tap / Long Press</Text>
      </Pressable>
      <Text style={{ marginTop: 12 }}>{log}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: { backgroundColor: '#BBDEFB', padding: 24, borderRadius: 12 },
});
export default App;
