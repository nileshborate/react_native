import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" children={() => <Screen label="Home" />} />
        <Tab.Screen name="Search" children={() => <Screen label="Search" />} />
        <Tab.Screen
          name="Profile"
          children={() => <Screen label="Profile" />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
