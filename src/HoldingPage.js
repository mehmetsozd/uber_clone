import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {View, Image, Dimensions} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';
import {KeyboardAvoidingView, Platform} from 'react-native';
import ProfileScreen from './screens/ProfileScreen';
import ActivityScreen from './screens/ActivityScreen';
import ServicesScreen from './screens/ServicesScreen';
const windowHeight = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Main() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: 'black',
          unmountOnBlur: true,
          tabBarStyle: {
            backgroundColor: '#fff',
            height: windowHeight * 0.08,
            paddingBottom: '2.5%',
            paddingTop: '2.5%',
            borderLeftWidth: 0,
            borderRightWidth: 0,
            zIndex: 1,
          },
        }}>
        <Tab.Screen
          name="Ana Sayfa"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('./assets/images/home.png')}
                style={{tintColor: color, height: '100%', aspectRatio: 1}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Servisler"
          component={ServicesScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('./assets/images/services.png')}
                style={{tintColor: color, height: '100%', aspectRatio: 1}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Son Etkinlikler"
          component={ActivityScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('./assets/images/activity.png')}
                style={{tintColor: color, height: '100%', aspectRatio: 1}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profil"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={require('./assets/images/profile.png')}
                style={{tintColor: color, height: '100%', aspectRatio: 1}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

function MainFeedScreen() {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EatsScreen"
          component={EatsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
}

function HoldingPage({}) {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MainFeedScreen />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default HoldingPage;
