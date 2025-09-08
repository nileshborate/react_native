import { useRef } from 'react';
import { Animated, PanResponder, View } from 'react-native';
import 'react-native-gesture-handler';

function App() {
  const pos = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pos.setOffset({ x: pos.x._value, y: pos.y._value });
        pos.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([null, { dx: pos.x, dy: pos.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, g) => {
        pos.flattenOffset();
        Animated.decay(pos, {
          velocity: { x: g.vx, y: g.vy },
          deceleration: 0.997,
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Animated.View
        {...pan.panHandlers}
        style={{
          width: 120,
          height: 120,
          backgroundColor: '#FFCDD2',
          borderRadius: 16,
          transform: pos.getTranslateTransform(),
          position: 'absolute',
          top: 200,
          left: 120,
        }}
      />
    </View>
  );
}

export default App;
