import { TouchableOpacity, Text, FlatList, View, Image, Alert } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

const data = [
 {
  id: "123",
  title: "Get a ride",
  image: "https://links.papareact.com/28w",
  screen: "MapScreen",
 },
 {
  id: "456",
  title: "Order food",
  image: "https://links.papareact.com/28w",
  screen: "EatsScreen",
 }
];

const NavOptions = () => {
 const navigation = useNavigation();
 const origin = useSelector(selectOrigin);
 return (
  <FlatList
   showsHorizontalScrollIndicator={false}
   data={data}
   horizontal
   keyExtractor={(item) => item.id}
   renderItem={({ item }) => (
    <TouchableOpacity
     onPress={() => {
      if (origin) {
       navigation.navigate(item.screen);
      }
      else {
       Alert.alert("Error", "Please enter a location first");
      }
     }}
     activeOpacity={0.6} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
     <View>
      <Image
       style={{
        width: 120,
        height: 120,
        resizeMode: "contain",
       }}
       source={{
        uri: item.image,
       }}
      />
      <Text style={tw`mt-2 text-lg font-semibold text-black`}>{item.title}</Text>
      <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name="arrowright" color="white" type='antdesign' />
     </View>
    </TouchableOpacity>
   )}
  />
 )
}

export default NavOptions