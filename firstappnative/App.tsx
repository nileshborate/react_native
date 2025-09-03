import { useState } from 'react';
import { Pressable, SectionList, Text, View } from 'react-native';

function App() {
  const [collapsed, setCollapsed] = useState({});
  const base = [
    { title: 'A', data: ['Apple', 'Avocado'] },
    { title: 'B', data: ['Banana', 'Blueberry'] },
  ];

  const sections = base.map(s => ({
    ...s,
    data: collapsed[s.title] ? [] : s.data,
  }));

  return (
    <View style={{ paddingTop: 60 }}>
      <SectionList
        sections={sections}
        renderSectionHeader={({ section }) => (
          <Pressable
            style={{ backgroundColor: '#EEE', padding: 8 }}
            onPress={() =>
              setCollapsed(c => ({ ...c, [section.title]: !c[section.title] }))
            }
          >
            <Text style={{ fontWeight: '700' }}>
              {section.title} {collapsed[section.title] ? '▸' : '▾'}
            </Text>
          </Pressable>
        )}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}

export default App;
