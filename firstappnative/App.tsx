import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import 'react-native-gesture-handler';

function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Dashboard',
      headerRight: () => (
        <Button
          title="Info"
          onPress={() => Alert.alert('Info!')}
          color="#841584"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', { id: 10, name: 'Nilesh' })
        }
      />
    </View>
  );
}
function Details({ route }) {
  const { id, name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details</Text>
      <Text>ID: {id}</Text>
      <Text>Name: {name}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
