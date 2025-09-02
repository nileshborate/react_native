import { useState } from 'react';
import { Alert, FlatList, Pressable, Text, View } from 'react-native';

function App() {
  const [data, setData] = useState(
    Array.from({ length: 8 }, (_, i) => ({
      id: String(i + 1),
      label: `Row ${i + 1}`,
    })),
  );

  const remove = (id: any) => setData(data.filter(x => x.id !== id));
  return (
    <View style={{ paddingTop: 60 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable
            onLongPress={() =>
              Alert.alert('Delete', `Remove ${item.label}`, [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Delete',
                  style: 'destructive',
                  onPress: () => remove(item.id),
                },
              ])
            }
          >
            <Text style={{ padding: 14 }}>{item.label}</Text>
          </Pressable>
        )}
        keyExtractor={x => x.id}
      />
    </View>
  );
}

export default App;
