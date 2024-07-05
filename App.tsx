import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginForm from './screen/LoginForm.tsx';
import MainScreen from './screen/MainScreen.tsx';
import TimeTrip from './screen/TimeTrip.tsx';
import Noted from './screen/Noted.tsx';
import Icon from 'react-native-vector-icons/FontAwesome5.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Let's trip" 
      component={MainScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen 
      name="Time To Go" 
      component={TimeTrip}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="cog" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen 
      name="My Notes" 
      component={Noted}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="pencil-alt" color={color} size={size} />
        ),
      }}
    />
    
  </Tab.Navigator>
);

// Main Stack Navigator
const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen 
      name="Login" 
      component={LoginForm} 
      options={{ headerShown: false }} // Sembunyikan header di halaman login
    />
    <Stack.Screen 
      name="Main" 
      component={MainTabNavigator} 
      options={{ headerShown: false }} // Sembunyikan header di halaman utama (yang memiliki bottom tab)
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
