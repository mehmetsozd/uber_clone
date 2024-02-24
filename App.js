import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./src/screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
