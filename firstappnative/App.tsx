import { useState } from 'react';
import { Pressable, SectionList, Text, View } from 'react-native';

function App() {
  const [active, setActive] = useState(null);
  const sections = [
    { title: 'Fruits', data: ['Apple', 'Banana', 'Cherry'] },
    { title: 'Veggies', data: ['Carrot', 'Onion', 'Peas'] },
  ];
  return (
    <View style={{ paddingTop: 60 }}>
      <SectionList
        sections={sections}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: '#F0F0F0', padding: 8 }}>
            <Text>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <Pressable style={{ padding: 12 }} onPress={() => setActive(item)}>
            <Text
              style={{
                fontWeight: item === active ? '800' : '400',
                color: item === active ? 'blue' : 'black',
              }}
            >
              {item}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

export default App;
