import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function App() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Name" onChangeText={setName} />
      <Text style={{ fontSize: 20 }}>Your Name : {name}</Text>
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
