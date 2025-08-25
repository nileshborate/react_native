import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

function App() {
  const data = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'Eight',
    'Nine',
    'Ten',
  ];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {data.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, gap: 15 },
  card: {
    width: 120,
    height: 150,
    backgroundColor: '#FFECB3',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
