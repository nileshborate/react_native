import { useEffect, useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';

function useInterval(callback, delay, running = true) {
  const saved = useRef(callback);
  useEffect(() => {
    saved.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!running || delay == null) return;
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay, running]);
}

function App() {
  const [run, setRun] = useState(true);
  const [sec, setSec] = useState(0);
  useInterval(() => setSec(s => s + 1), 1000, run);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 18 }}>Seconds: {sec}</Text>
      <Button
        title={run ? 'Pause' : 'Resume'}
        onPress={() => {
          setRun(!run);
        }}
      />
      <Button title="Reset" onPress={() => setSec(0)} />
    </View>
  );
}

export default App;
