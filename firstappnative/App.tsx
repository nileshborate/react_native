import { useEffect, useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'notes.db' });

function App() {
  const [title, setTitle] = useState('');
  const [show, setShow] = useState('');
  const [rows, setRows] = useState([]);

  useEffect(() => {
    db.transaction(
      tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)',
        );
      },
      undefined,
      refresh,
    );
    console.log('Table created');
  }, []);

  const add = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO notes (title) VALUES (?)', [title], refresh);
    });
  };

  const refresh = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT id,title FROM notes order by id',
        [],
        (_, { rows }) => {
          setRows(rows.raw());
        },
      );
    });
  };
  return (
    <View
      style={{
        marginTop: 80,
        padding: 16,
        gap: 10,
      }}
    >
      <TextInput
        placeholder="New Note"
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginBottom: 8,
        }}
      />
      <Button title="Add" onPress={add} />
      <FlatList
        style={{ marginTop: 12 }}
        data={rows}
        renderItem={({ item }) => (
          <Text style={{ padding: 8 }}>{item.title}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default App;
