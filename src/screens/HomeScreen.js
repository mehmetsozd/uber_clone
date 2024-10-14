import {
  Image,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import {setDestination, setOrigin} from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import Suggestions from '../components/Suggestions';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={tw`pt-5 pl-5 pr-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          resizeMode="contain"
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}></Image>
        <GooglePlacesAutocomplete
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              }),
            );
            dispatch(setDestination(null));
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          returnKeyType={'search'}
          placeholder="Nereden?"
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
            },
          }}
          query={{
            key: 'AIzaSyCYZnwEmZ01nM2NhuNmyh1Sa9Bub_kJNfY',
            language: 'tr',
          }}
        />
      </View>
      <FlatList
        ListHeaderComponent={
          <View style={tw`p-5 pt-0`}>
            <NavOptions />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
