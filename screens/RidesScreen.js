// ./screens/RidesScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList, Alert } from 'react-native';

// Expo imports
import * as Location from 'expo-location';
import MapView, { Marker }from 'react-native-maps';

// Components imports
import RideInfoCard from '../components/RideInfoCard';

// Styling imports
import COLORS from '../constants/colors';
import DATA from '../data/rides';

// helper function to render custom components in flatlist
const _renderItem = ( {item}, props ) => {
  return <RideInfoCard 
          start={item.start} 
          end={item.end}
          style={styles.rideInfoCard} 
          />
};

const RidesScreen = props => {

  const [ isFetching, setIsFetching ] = useState(false);
  const [ pickedLocation, setPickedLocation ] = useState();
  const [ status, requestPermission ] = Location.useForegroundPermissions();
  
  const getLocationHandler = async () => {

    if (status.status !== 'granted') {
      requestPermission();
      return;
    }
    try {
      setIsFetching(true);
      const userLocation = await Location.getCurrentPositionAsync({timeout: 5000});
      setPickedLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude
      });
    } 
    catch(err) {
      console.log(err);
      Alert.alert('Could not get the location', 'Try again please', [{text:'Okay'}])
    };
    setIsFetching(false);
  };

  return (
    <View style={styles.mainContainer}>

      {isFetching ? <View style={styles.mapBox}><ActivityIndicator /></View> : 
      <MapView style={styles.mapBox} region={pickedLocation}>
        <Marker title='your location' coordinate={pickedLocation}/> 
      </MapView>
      }
      <View style={styles.buttonsBox}>
        <TouchableOpacity style={styles.startButton} onPress={getLocationHandler}>
          <Text style={styles.startButtonText}> START </Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.stopButton} onPress={getLocationHandler}> 
          <Text style={styles.stopButtonText}> STOP </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pastRidesBox}>
        <View style={{alignSelf:'flex-start', marginLeft:20, marginBottom:4}}>
          <Text style={{fontFamily:'roboto-mono', fontSize:18, color:COLORS.text}}>Previous rides</Text>
        </View>
        <FlatList
        data={DATA}
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.id}
        style={styles.flatListStyle}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    alignItems:'center',
  },

  mapBox: {
    flex:1,
    width:'90%',
    margin:20,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonsBox: {
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:15
  },

  startButton: {
    flex:1,
    marginRight:10,  
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    borderWidth:2,
    padding:10
  },

  startButtonText: {
    fontFamily:'roboto-mono',
    fontSize:20,
  },

  stopButton: {
    flex:1,
    marginLeft:10,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'red',
    borderRadius:15,
    borderWidth:2,
    padding:10
  },

  stopButtonText: {
    fontFamily:'roboto-mono',
    fontSize:20,
    color: 'red'
  },
  
  pastRidesBox: {
    flex:1,
    width:'100%',
    alignItems: 'center'
  },

  flatListStyle:{
    width:'95%',
  },
});

export default RidesScreen;
