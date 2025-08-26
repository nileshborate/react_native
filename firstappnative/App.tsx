import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

function App() {
  const [dark, setDark] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: dark ? '#121212' : '#FAFAFA',
      }}
    >
      <Text style={{ marginBottom: 10, color: dark ? '#fff' : '#000' }}>
        Dark Mode
      </Text>
      <Switch value={dark} onValueChange={setDark} />
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;
