import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import homeScreen from './src/pages/homeScreen';
import modeloScreen from './src/pages/modeloScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={homeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Modelo"
          component={modeloScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;