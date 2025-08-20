import { Image, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header Area</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Main Content</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Area</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 3,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: { fontSize: 22, fontWeight: 'bold' },
  bodyText: { fontSize: 20 },
  footerText: { fontSize: 18 },
});

export default App;
