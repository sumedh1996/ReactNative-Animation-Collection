import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import AnimationScreen1 from './Screens/Animation1';
import AnimationScreen2 from './Screens/Animation2'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: true
        }} />
        <Stack.Screen name="Animation1" component={AnimationScreen1} />
        <Stack.Screen name="Animation2" component={AnimationScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;