import { useRef } from 'react';
import { Animated, Button, Dimensions, Text, View } from 'react-native';
import 'react-native-gesture-handler';

function App() {
  const H = Dimensions.get('window').height;
  const y = useRef(new Animated.Value(H)).current;

  const open = () =>
    Animated.timing(y, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

  const close = () =>
    Animated.timing(y, {
      toValue: H,
      duration: 500,
      useNativeDriver: true,
    }).start();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ marginTop: 80, alignItems: 'center', gap: 5 }}>
        <Button title="Open sheet" onPress={open} />
        <Button title="Close" onPress={close} />
      </View>

      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          transform: [{ translateY: y }],
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
          elevation: 8,
        }}
      >
        <Text style={{ fontWeight: '700' }}>Bottom sheet</Text>
        <Text>slides from Bottom</Text>
      </Animated.View>
    </View>
  );
}

export default App;
