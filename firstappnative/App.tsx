import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.wrap}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.h}>Safe Header</Text>
      </View>
      <View style={styles.content}>
        <Text>Content area…</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ color: '#fff' }}>Sticky Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  h: { fontSize: 20, fontWeight: '700' },
  header: { padding: 16, backgroundColor: '#E3F2FD' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  footer: { padding: 16, backgroundColor: '#1976D2', alignItems: 'center' },
});
export default App;
