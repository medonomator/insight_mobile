// import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Home from './src/screens/home';
import SingleAphorisms from './src/screens/singleAphorisms';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="SingleAphorisms" component={SingleAphorisms} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
