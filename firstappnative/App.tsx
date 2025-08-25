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
    <ScrollView contentContainerStyle={styles.content}>
      {data.map((item, index) => (
        <View>
          <View key={index} style={styles.card}>
            <Text>{item}</Text>
          </View>
          {index % 3 === 0 && <View style={styles.divider} />}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, gap: 15 },
  card: {
    marginHorizontal: 10,
    fontWeight: '700',
  },
  divider: { height: 1, backgroundColor: '#ccc', flex: 1 },
});
export default App;
