import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  useEffect(() => {
    console.log('App loaded');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Check Console!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
