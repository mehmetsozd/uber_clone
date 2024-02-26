import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from 'react';
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import EatsScreen from "./screens/EatsScreen";


const Stack = createNativeStackNavigator();

function MainFeedScreen() {
 return (
  <Stack.Navigator>
   <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
   <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
   <Stack.Screen name="EatsScreen" component={EatsScreen} options={{ headerShown: false }} />
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

