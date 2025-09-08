import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {
  Button,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const TodoCtx = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'load':
      return action.todos;
    case 'add':
      return [
        ...state,
        { id: Date.now().toString(), text: action.text, done: false },
      ];
    case 'toggle':
      return state.map(t => (t.id === action.id ? { ...t, done: !t.done } : t));
    case 'del':
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
  return (
    <TodoCtx.Provider value={{ todos, dispatch }}>{children}</TodoCtx.Provider>
  );
}

function TodoApp() {
  const { todos, dispatch } = useContext(TodoCtx);
  const [text, setText] = useState('');
  return (
    <View
      style={{
        marginTop: 80,
        padding: 16,
      }}
    >
      <TextInput
        placeholder="Add todo"
        value={text}
        onChangeText={setText}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginBottom: 8,
        }}
      />
      <Button
        title="Add"
        onPress={() => {
          if (text.trim()) {
            dispatch({ type: 'add', text });
            setText('');
          }
        }}
      />
      <FlatList
        data={todos}
        keyExtractor={x => x.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => dispatch({ type: 'toggle', id: item.id })}
            onLongPress={() => dispatch({ type: 'del', id: item.id })}
          >
            <Text
              style={{
                padding: 10,
                textDecorationLine: item.done ? 'line-through' : 'none',
              }}
            >
              {item.text}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

export default function App() {
  return (
    <Provider>
      <TodoApp />
    </Provider>
  );
}
