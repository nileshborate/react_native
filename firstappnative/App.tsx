import { useEffect, useRef, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [name, setName] = useState('');
  const [saved, setSaved] = useState('');

  const save = async () => {
    await AsyncStorage.setItem('user:name', name);
  };
  const load = async () => {
    const item = (await AsyncStorage.getItem('user:name')) || '';
    setSaved(item);
  };
  const clear = async () => {
    await AsyncStorage.removeItem('user:name');
    setSaved('');
  };

  return (
    <View
      style={{
        marginTop: 80,
        padding: 16,
        gap: 10,
      }}
    >
      <TextInput
        placeholder="Enter Name"
        onChangeText={setName}
        value={name}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginBottom: 10,
        }}
      />
      <Button title="Save" onPress={save} />
      <Button title="Load" onPress={load} />
      <Button title="Clear" onPress={clear} />
      <Text>Saved : {saved || '(none)'}</Text>
    </View>
  );
}

export default App;
