import { ImageBackground, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
      }}
      style={styles.bg}
    >
      <View style={styles.overlay} />
      <Text style={styles.title}>Learn React Native</Text>
      <Text style={styles.subtitle}>Build once. Run everywhere.</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  title: { fontSize: 30, fontWeight: '800', color: '#fff' },
  subtitle: { marginTop: 6, color: '#fff' },
});
export default App;
