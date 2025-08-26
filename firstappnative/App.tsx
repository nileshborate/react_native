import { useState } from 'react';
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const valid = email.includes('@') && pass.length >= 6;

  const submit = () => Alert.alert('Login', 'Welcome!!!');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={pass}
        onChangeText={setPass}
        secureTextEntry
      />
      <Button title="Sign in" disabled={!valid} onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 60,
  },
  input: { borderWidth: 1, borderRadius: 8, padding: 12, marginBottom: 10 },
});
export default App;
