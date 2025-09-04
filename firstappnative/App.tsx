import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';

const PAGE_SIZE = 25;
function App() {
  const [data, setData] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);

  const [page, setPage] = useState(1);
  const canLoad = useRef(true);

  const fetchPage = async p => {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${PAGE_SIZE}&_page=${p}`,
    );
    const rows = await resp.json();
    console.log('Response = ', rows);
    if (rows.length < PAGE_SIZE) {
      canLoad.current = false;
    }
    setData(prev => [...prev, ...rows]);
  };

  useEffect(() => {
    fetchPage(1);
  }, []);

  const onEnd = async () => {
    if (loadingMore || !canLoad.current) return;

    setLoadingMore(true);
    const next = page + 1;
    await fetchPage(next);
    setPage(next);
    setLoadingMore(false);
  };

  return (
    <FlatList
      style={{ marginTop: 50 }}
      data={data}
      keyExtractor={x => String(x.id)}
      renderItem={({ item }) => (
        <Text style={{ padding: 12 }}>
          {item.id} : {item.title}
        </Text>
      )}
      onEndReached={onEnd}
      ListFooterComponent={
        loadingMore ? <ActivityIndicator style={{ margin: 12 }} /> : null
      }
      onEndReachedThreshold={0.3}
    />
  );
}

export default App;
