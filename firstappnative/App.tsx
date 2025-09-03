import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import 'react-native-gesture-handler';

function Screen({ label }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>{label}</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={() => <Screen label="Home" />} />
        <Drawer.Screen
          name="Search"
          children={() => <Screen label="Search" />}
        />
        <Drawer.Screen
          name="Profile"
          children={() => <Screen label="Profile" />}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
