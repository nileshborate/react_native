import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Chip = ({ label }) => (
  <View style={styles.chip}>
    <Text style={styles.chipText}>{label}</Text>
  </View>
);

function App() {
  const skills = [
    'React',
    'RN',
    'TypeScript',
    'SQLite',
    'Redux',
    'REST',
    'GraphQL',
    'Jest',
    'CI/CD',
  ];
  return (
    <View style={styles.wrap}>
      {skills.map((skill, index) => (
        <Chip label={skill} key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignContent: 'flex-start',
  },
  chip: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  chipText: { fontWeight: '600', color: '#424242' },
});
export default App;
