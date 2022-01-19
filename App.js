import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initailRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#C45',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
     >
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{title:'สุระปั๋งไมเคิล'}} 
        />
        <Stack.Screen 
        name="About" 
        component={AboutScreen} 
        options={{title:'อะปัชะวอคกิ้ง'}} 
        />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default App
