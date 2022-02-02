import {View, Text, Image} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';

import im1 from './images/logo1.png';
import im2 from './images/logo2.png';
import im3 from './images/logo3.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenB() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'teal',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home Screen'}}
      />
    </Stack.Navigator>
  );
}

function SettingB() {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{title: 'Setting Screen'}}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{title: 'Profile Screen'}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;
            if (route.name === 'HomeScreen') {
              iconName = focused ? im2 : im1;
            } else if (route.name === 'SettingScreen') {
              iconName = focused ? im3 : im1;
            }
            return (
              <Image
                source={iconName}
                color={color}
                style={{width: 30, height: 30}}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'magenta',
          inactiveTinrColor: '#cccccc',
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreenB}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name="SettingScreen"
          component={SettingB}
          options={{title: 'Setting'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
