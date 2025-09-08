import 'react-native-gesture-handler';
import React, {
  useReducer,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Reanimated + Gestures
import Animated, {
  Layout,
  SlideInRight,
  SlideOutLeft,
  FadeIn,
  FadeOut,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  runOnJS,
  interpolateColor,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//////////////////// Store (Reducer + Context) ////////////////////
const TodoCtx = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'load':
      return action.todos;
    case 'add':
      return [
        { id: Date.now().toString(), text: action.text, done: false },
        ...state,
      ];
    case 'toggle':
      return state.map(t => (t.id === action.id ? { ...t, done: !t.done } : t));
    case 'delete':
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
}

function Provider({ children }) {
  const [todos, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    (async () => {
      const raw = await AsyncStorage.getItem('todos');
      if (raw) dispatch({ type: 'load', todos: JSON.parse(raw) });
    })();
  }, []);
  useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const value = useMemo(() => ({ todos, dispatch }), [todos]);
  return <TodoCtx.Provider value={value}>{children}</TodoCtx.Provider>;
}

//////////////////// UI: Single Row with Animations ////////////////////
function TodoRow({ item }) {
  const { dispatch } = useContext(TodoCtx);

  // Toggle animation bits
  const checked = useSharedValue(item.done ? 1 : 0);
  // Keep shared value in sync if list re-renders with updated "done"
  React.useEffect(() => {
    checked.value = withTiming(item.done ? 1 : 0, { duration: 180 });
  }, [item.done]);

  const checkboxStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(checked.value ? 1.05 : 1) }],
    backgroundColor: checked.value ? '#4CAF50' : '#fff',
    borderColor: checked.value ? '#4CAF50' : '#bbb',
  }));

  const textStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      checked.value,
      [0, 1],
      ['#212121', '#8BC34A'],
    );
    return { color };
  });

  // Swipe-to-delete
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);

  const removeRow = () => dispatch({ type: 'delete', id: item.id });

  const pan = Gesture.Pan()
    .onChange(e => {
      // only allow left swipe
      translateX.value = Math.min(0, translateX.value + e.changeX);
    })
    .onEnd(() => {
      const THRESH = -90;
      if (translateX.value < THRESH) {
        // dismiss with exit animation
        translateX.value = withTiming(-300, { duration: 180 }, () => {
          opacity.value = withTiming(0, { duration: 120 }, () =>
            runOnJS(removeRow)(),
          );
        });
      } else {
        translateX.value = withSpring(0);
      }
    });

  const rowStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: opacity.value,
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        entering={SlideInRight.springify(70).damping(14)}
        exiting={SlideOutLeft.duration(160)}
        layout={Layout.springify().damping(14)}
        style={[styles.rowWrap, rowStyle]}
      >
        <Pressable
          onPress={() => dispatch({ type: 'toggle', id: item.id })}
          android_ripple={{ color: '#e0e0e0' }}
          style={styles.row}
        >
          <Animated.View style={[styles.checkbox, checkboxStyle]}>
            {item.done ? <Text style={styles.checkmark}>✓</Text> : null}
          </Animated.View>

          <Animated.Text
            style={[
              styles.title,
              textStyle,
              item.done && { textDecorationLine: 'line-through', opacity: 0.8 },
            ]}
            numberOfLines={2}
          >
            {item.text}
          </Animated.Text>

          {/* Tap-to-delete button (fallback to gesture) */}
          <Pressable style={styles.deleteBtn} onPress={removeRow}>
            <Text style={styles.deleteTxt}>🗑️</Text>
          </Pressable>
        </Pressable>
      </Animated.View>
    </GestureDetector>
  );
}

//////////////////// Screen ////////////////////
function TodoApp() {
  const { todos, dispatch } = useContext(TodoCtx);
  const [text, setText] = useState('');

  const add = () => {
    const t = text.trim();
    if (!t) return;
    dispatch({ type: 'add', text: t });
    setText('');
  };

  return (
    <View style={styles.screen}>
      <Animated.Text entering={FadeIn} exiting={FadeOut} style={styles.header}>
        ✨ Todo Manager
      </Animated.Text>

      <View style={styles.inputRow}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Add a new task…"
          placeholderTextColor="#9e9e9e"
          style={styles.input}
          onSubmitEditing={add}
          returnKeyType="done"
        />
        <Pressable style={styles.addBtn} onPress={add}>
          <Text style={styles.addTxt}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 40 }}
        data={todos}
        keyExtractor={x => x.id}
        renderItem={({ item }) => <TodoRow item={item} />}
        ListEmptyComponent={
          <Animated.Text entering={FadeIn} style={styles.empty}>
            No tasks yet. Add your first one! 📝
          </Animated.Text>
        }
      />
    </View>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <TodoApp />
      </Provider>
    </GestureHandlerRootView>
  );
}

//////////////////// Styles ////////////////////

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#FAFAFA',
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
    color: '#263238',
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#212121',
  },
  addBtn: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  addTxt: { color: '#fff', fontWeight: '700' },
  rowWrap: {
    borderRadius: 14,
    backgroundColor: '#fff',
    marginVertical: 6,
    overflow: 'hidden',
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    gap: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: { color: '#fff', fontWeight: '900', fontSize: 14, lineHeight: 14 },
  title: { flex: 1, fontSize: 16 },
  deleteBtn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
  deleteTxt: { fontSize: 16 },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: '#9E9E9E',
  },
});
