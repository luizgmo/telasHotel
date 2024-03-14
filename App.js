import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import homeScreen from './src/pages/homeScreen';
import pascoaScreen from './src/pages/pascoaScreen';

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
          name="Pascoa"
          component={pascoaScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;