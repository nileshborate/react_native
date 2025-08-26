import { useState } from 'react';
import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button title="Open Model" onPress={() => setOpen(true)} />
      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setOpen(false)}
        >
          <View
            style={{
              backgroundColor: '#fff',
              padding: 20,
              borderRadius: 12,
              minWidth: 260,
            }}
          >
            <Text style={{ fontWeight: '700', marginBottom: 8 }}>
              Hello !!!
            </Text>
            <Text>Tap outside to close.</Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
export default App;
