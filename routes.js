import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Modelos from "./pages/Modelos";
import Anos from "./pages/Anos";
import Carros from "./pages/Carros";


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Modelos' component={Modelos} />
        <Stack.Screen name='Anos' component={Anos} />
        <Stack.Screen name='Carro' component={Carros} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
