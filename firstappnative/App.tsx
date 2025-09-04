import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import 'react-native-gesture-handler';

const Home = ({ navigation, route }) => {
  const [value, setValue] = useState('None');
  useEffect(() => {
    if (route?.params?.value) {
      setValue(route?.params?.value);
    }
  }, [route?.params?.value]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Selected : {value}</Text>
      <Button
        title="Pick Value"
        onPress={() =>
          navigation.navigate('Picker', {
            onPick: v => navigation.setParams({ value: v }),
          })
        }
      />
    </View>
  );
};
const Picker = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const onPick = route?.params?.onPick;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Picker</Text>
      <Button
        title="Choose A"
        onPress={() => {
          onPick('A');
          navigation.goBack();
        }}
      />
      <Button
        title="Choose B"
        onPress={() => {
          onPick('B');
          navigation.goBack();
        }}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Picker" component={Picker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
