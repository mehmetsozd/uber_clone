import HomeScreen from "./src/screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./src/screens/MapScreen";
import * as React from 'react';


const Stack = createNativeStackNavigator();

function MainFeedScreen() {
 return (
  <Stack.Navigator>
   <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
   <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
 );
}


function HoldingPage({ }) {
 return (
  <NavigationContainer>
   <SafeAreaProvider>
    <MainFeedScreen />
   </SafeAreaProvider>
  </NavigationContainer>
 );
}

export default HoldingPage;

