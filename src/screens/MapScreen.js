import {View, Text} from 'react-native';
import React from 'react';
import Map from '../components/Map';
import tw from 'twrnc';
import NavigateCard from '../components/NavigateCard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View
        style={{
          height: '65%',
        }}>
        <Map />
      </View>

      <View
        style={{
          height: '35%',
        }}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
