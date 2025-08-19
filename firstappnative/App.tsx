import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 Welcome</Text>
      <Text style={styles.name}>Name: Nilesh Borate</Text>
      <Text style={styles.course}>Course: React Native Basics</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 30, fontWeight: 'bold', color: 'blue' },
  name: { fontSize: 20, marginTop: 10 },
  course: { fontSize: 18, marginTop: 5, color: 'green' },
});

export default App;
