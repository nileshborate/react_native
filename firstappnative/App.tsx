import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
} from 'react-native';

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    const fetchPage = setTimeout(async () => {
      if (!q) {
        setData([]);
        return;
      }
      const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const all = await resp.json();
      console.log('Response = ', all);
      const filtered = all.filter(row =>
        row.name.toLowerCase().includes(q.toLowerCase()),
      );
      console.log('filtered = ', filtered);

      setData(filtered);
    }, 500);
    return () => clearTimeout(fetchPage);
  }, [q]);

  return (
    <View style={{ marginTop: 20, padding: 12 }}>
      <TextInput
        placeholder="Search Users...."
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 12,
          marginBottom: 10,
        }}
        onChangeText={setQ}
        value={q}
      />
      <FlatList
        data={data}
        keyExtractor={x => String(x.id)}
        renderItem={({ item }) => (
          <Text style={{ padding: 12 }}>
            {item.id} : {item.name}
          </Text>
        )}
      />
    </View>
  );
}

export default App;
