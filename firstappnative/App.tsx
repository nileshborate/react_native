import { StyleSheet, Text, View } from 'react-native';

function App() {
  const MyName = (props: any) => <Text>My Name is {props.name}</Text>;
  return (
    <View>
      <MyName name="Nilesh" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
