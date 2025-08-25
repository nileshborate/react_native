import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

function App() {
  const [rating, setRating] = useState(0);
  const items = [1, 2, 3, 4, 5];
  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      }}
    >
      {items.map((number, index) => (
        <Pressable key={index} onPress={() => setRating(number)}>
          <Text
            key={index}
            style={{
              fontSize: 30,
            }}
          >
            {number <= rating ? '★' : '☆'}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;
