import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from "react-native";
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';
import MenuScreen from './screens/MenuScreen';
import AboutScreen from './screens/AboutScreen';
import RegisterScreen from './screens/RegisterScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import UserContext from './context/UserContext';
import UserStoreProvider from './context/UserContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: 'magenta'},
      headerTintColor: '#FFFF',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{title: 'หน้าหลัก'}}
    />
    <Stack.Screen
      name="About"
      component={AboutScreen}
      options={{title: 'เกี่ยวกับเรา'}}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{title: 'ลงทะเบียน'}}
    />
     <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{title: 'เข้าสู่ระบบ'}}
    />
  </Stack.Navigator>
  );
}

function ProductStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: 'magenta'},
      headerTintColor: '#FFFF',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <Stack.Screen
      name="ProductScreen"
      component={ProductScreen}
      options={{title: 'สินค้า'}}
    />
      <Stack.Screen
      name="DetailScreen"
      component={DetailScreen}
      options={{title: 'Detail Screen'}}
    />
     <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{title: 'ลงทะเบียน'}}
    />
  </Stack.Navigator>
  );
}


function App() {
  return (
      <UserStoreProvider>
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="HomeStack"
                drawerPosition="left"
                drawerContent={(props) => <MenuScreen {...props} />}
            >
                <Drawer.Screen 
                  name="HomeStack" 
                  component={HomeStack} 
                />
                <Drawer.Screen 
                  name="ProductStack" 
                  component={ProductStack} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
      </UserStoreProvider>
  );
}

export default App;
