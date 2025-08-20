import { Text, View } from 'react-native';

function MyName(props: any) {
  return (
    <Text>
      My Name is {props.name}. And Age is {props.age}
    </Text>
  );
}

function App() {
  return (
    <View>
      <MyName name="Nilesh123" age={38} />
    </View>
  );
}

export default App;
