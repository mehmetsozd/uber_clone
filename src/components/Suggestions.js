import { TouchableOpacity, Text, FlatList, View, Image, Alert } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native';

const data = [
 {
  id: "123",
  title: "Yolculuk",
  image: "https://links.papareact.com/28w",
  screen: "RideScreen",
 },
 {
  id: "456",
  title: "Paket",
  image: "https://links.papareact.com/28w",
  screen: "PackageScreen",
 },
 {
  id: "789",
  title: "Rezervasyon",
  image: "https://links.papareact.com/28w",
  screen: "ReserveScreen"
 },
 {
  id: "101112",
  title: "Kiralama",
  image: "https://links.papareact.com/28w",
  screen: "RentScreen",
 }
];

const Suggestions = () => {
 const navigation = useNavigation();
 return (
  <View style={tw`pt-2 pb-4`}>
   <View style={tw`mt-2 flex flex-row justify-between items-center`}>
    <Text style={tw` text-xl font-bold text-black `}>
     Öneriler
    </Text>
    <Text style={tw`text-gray-500  font-semibold `}>
     Hepsi
    </Text>
   </View>
   <FlatList
    data={data}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
     <TouchableOpacity
      onPress={() => {
       navigation.navigate(item.screen);
      }}>
      <View
       style={tw`p-3 bg-gray-200 m-2 rounded-2`}>
       <Image
        style={{
         width: 50,
         aspectRatio: 1,
         resizeMode: 'contain',
        }}
        source={{
         uri: item.image
        }}
       />
      </View>
      <Text style={tw`text-center text-black font-semibold`}>{item.title}</Text>
     </TouchableOpacity>
    )
    }
   />
  </View >
 )
}

export default Suggestions