import { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function App() {
  const [liked, setLiked] = useState(false);
  const lastTap = useRef(0);
  const onTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      setLiked(!liked);
    }
    lastTap.current = now;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        style={{ padding: 24, backgroundColor: '#E1F5FE', borderRadius: 12 }}
        onPress={onTap}
      >
        <Text style={{ fontSize: 28 }}>{liked ? '❤️' : '🤍'}</Text>
      </Pressable>
      <Text style={{ marginTop: 8 }}>Double-tap the card</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;
