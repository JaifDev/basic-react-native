import { Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5"; // Import from FontAwesome5

import Home from "./src/screens/Home";
import Form from "./src/screens/Form";

const Tab = createMaterialBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={20} color={color} /> // Use FontAwesome5
          ),
        }}
      />
      <Tab.Screen
        name="Form"
        component={Form}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="wpforms" size={20} color={color} /> // Use FontAwesome5
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
