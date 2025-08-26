import { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text } from 'react-native';

function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  return (
    <ScrollView
      contentContainerStyle={{ padding: 20 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text>Pull down to refresh</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
export default App;
