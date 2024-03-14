import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from 'react';
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import EatsScreen from "./screens/EatsScreen";
import { KeyboardAvoidingView, Platform } from "react-native";


const Stack = createNativeStackNavigator();

function MainFeedScreen() {
 return (
  <KeyboardAvoidingView
   style={{ flex: 1 }}
   behavior={Platform.OS === "ios" ? "padding" : "height"}
   keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
  >
   <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
    <Stack.Screen name="EatsScreen" component={EatsScreen} options={{ headerShown: false }} />
   </Stack.Navigator>
  </KeyboardAvoidingView>

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

