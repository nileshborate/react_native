import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

function App() {
  const [active, setActive] = useState(null);
  const items = ['Home', 'Search', 'Profile'];
  return (
    <View style={{ padding: 20, gap: 10 }}>
      {items.map((item, index) => (
        <Pressable key={index} onPress={() => setActive(item)}>
          <Text
            key={index}
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: active === item ? 'red' : 'black',
              backgroundColor: active === item ? 'red' : 'white',
            }}
          >
            {item}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;
