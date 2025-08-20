import { Image, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
        style={styles.image}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.role}>Mobile App Developer</Text>
      <Text style={styles.contact}>📧 john@example.com</Text>
      <Text style={styles.contact}>📞 +91 9876543210</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
  },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 24, fontWeight: 'bold' },
  role: { fontSize: 18, color: 'gray', marginBottom: 10 },
  contact: { fontSize: 16 },
});

export default App;
