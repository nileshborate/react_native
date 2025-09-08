import { useRef } from 'react';
import {
  Animated,
  Button,
  Dimensions,
  Pressable,
  Text,
  View,
} from 'react-native';
import 'react-native-gesture-handler';

function App() {
  const scale = useRef(new Animated.Value(1)).current;

  const bump = () => {
    Animated.spring(scale, {
      toValue: 1.15,
      useNativeDriver: true,
      friction: 3,
      tension: 120,
    }).start(() => {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        <Pressable
          style={{
            paddingVertical: 14,
            paddingHorizontal: 22,
            backgroundColor: '#1976D2',
            borderRadius: 12,
          }}
          onPress={bump}
        >
          <Text style={{ color: '#fff', fontWeight: '700' }}>Bounce</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

export default App;
