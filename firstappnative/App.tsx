import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import * as Keychain from 'react-native-keychain';

function App() {
  const [u, setU] = useState('');
  const [p, setP] = useState('');
  const [show, setShow] = useState('');

  const save = async () => {
    await Keychain.setGenericPassword(u, p, {
      accessControl: Keychain.ACCESS_CONTROL.DEVICE_PASSCODE_OR_BIOMETRICS,
    });
    Alert.alert('Saved Successfully');
  };
  const load = async () => {
    const cred = await Keychain.getGenericPassword();
    setShow(cred ? `${cred.username} : ${cred.password}` : '(none)');
  };
  const reset = async () => {
    await Keychain.resetGenericPassword();
    setShow('');
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
        placeholder="Username"
        value={u}
        onChangeText={setU}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginBottom: 8,
        }}
      />
      <TextInput
        placeholder="Password"
        value={p}
        onChangeText={setP}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginBottom: 8,
        }}
      />
      <Button title="Save (Secure)" onPress={save} />
      <Button title="Load" onPress={load} />
      <Button title="Reset" onPress={reset} />
      <Text style={{ marginTop: 10 }}>{show}</Text>
    </View>
  );
}

export default App;
