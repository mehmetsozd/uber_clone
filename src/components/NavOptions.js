import { TouchableOpacity, Text, FlatList, View, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"

const data = [
 {
  id: "123",
  title: "Get a ride",
  image: "https://links.papareact.com/28w",
 },
 {
  id: "456",
  title: "Order food",
  image: "https://links.papareact.com/28w",
 }
];

const NavOptions = () => {
 return (
  <FlatList
   showsHorizontalScrollIndicator={false}
   data={data}
   horizontal
   keyExtractor={(item) => item.id}
   renderItem={({ item }) => (
    <TouchableOpacity activeOpacity={0.6} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
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
     </View>
    </TouchableOpacity>
   )}
  />
 )
}

export default NavOptions