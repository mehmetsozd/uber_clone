import { Image, SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import Suggestions from '../components/Suggestions';

const HomeScreen = () => {
 const dispatch = useDispatch();

 return (
  <SafeAreaView style={tw`bg-white h-full`}>
   <View style={tw`p-5`}>
    <Image
     style={{
      width: 100,
      height: 100
     }}
     resizeMode='contain'
     source={{
      uri: "https://links.papareact.com/gzs"
     }}>
    </Image>
    <GooglePlacesAutocomplete
     onPress={(data, details = null) => {
      dispatch(
       setOrigin({
        location: details.geometry.location,
        description: data.description
       })
      );
      dispatch(setDestination(null));
     }}
     nearbyPlacesAPI='GooglePlacesSearch'
     debounce={400}
     returnKeyType={'search'}
     placeholder='Nereye?'
     fetchDetails={true}
     enablePoweredByContainer={false}
     minLength={2}
     styles={{
      container: {
       flex: 0,
      },
      textInput: {
       backgroundColor: '#DDDDDF',
       fontSize: 18,
       color: 'black',
       borderRadius: 20,
       paddingLeft: 20,
      }
     }}
     query={{
      key: GOOGLE_MAPS_APIKEY,
      language: 'tr'
     }}
    />
    <NavFavourites />
    <View style={tw`mt-auto border-t-4 border-gray-200`} />
    <Suggestions />
   </View>
  </SafeAreaView>
 )
}

export default HomeScreen