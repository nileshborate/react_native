import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';

function App() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const resp = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=100',
        );
        const data = await resp.json();
        console.log('Response = ', data);
        setData(data);
      } catch (e) {
        setErr(e?.message || e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#000" style={{ marginTop: 80 }} />
    );
  }

  if (err) {
    return (
      <Text style={{ marginTop: 80, color: 'red', textAlign: 'center' }}>
        {err}
      </Text>
    );
  }
  return (
    <FlatList
      style={{ marginTop: 50 }}
      data={data}
      keyExtractor={x => String(x.id)}
      renderItem={({ item }) => (
        <Text style={{ padding: 12 }}>{item.title}</Text>
      )}
    />
  );
}

export default App;
