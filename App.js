import * as React from 'react';
import HomeScreen from "./Screen/Home"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FictionScreen from "./Screen/Fiction";
import ComedyScreen from "./Screen/Comedy";
import ThrillerScreen from "./Screen/Thriller";
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />  
        <Tab.Screen name="Fiction" component={FictionScreen} />
        <Tab.Screen name="Comedy" component={ComedyScreen} />
        <Tab.Screen name="Thriller" component={ThrillerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

