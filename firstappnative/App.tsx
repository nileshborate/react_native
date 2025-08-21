import { Image, ScrollView, StyleSheet, View } from 'react-native';

const Img = ({ uri }) => (
  <View style={styles.cell}>
    <Image source={{ uri }} style={styles.photo} />
  </View>
);

function App() {
  const pics = Array.from(
    { length: 50 },
    (_, i) => `https://picsum.photos/seed/${i + 1}/400/400`,
  );
  console.log('Pics = ', pics);
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.wrap}>
        {pics.map((url, i) => (
          <Img key={i} uri={url} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 5 },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  photo: { width: '100%', height: '100%' },
  cell: {
    width: '47%',
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
});
export default App;
