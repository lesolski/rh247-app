import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import MapView, {Marker}  from 'react-native-maps';


import { useDispatch, useSelector } from 'react-redux';
import { SAVE_MARKER } from '../../store/sites/types';


const MapViewScreen = () => {

  const dispatch = useDispatch();

  // initialMarker if user tries to retake location from AddSiteScreen.js 
  const initialMarker = useSelector(state => state.sites.coords) 
  const [marker, setMarker] = useState(initialMarker);

  const pointerHandler = (event) => {
    dispatch({ type:SAVE_MARKER , payload: event.nativeEvent.coordinate});
    setMarker(event.nativeEvent.coordinate)
  }; 

  return (
    <MapView 
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.mapBox}
      showsUserLocation={true} 
      onPress={(e) => pointerHandler(e)}
    > 

    { marker &&
    <Marker 
      coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
      title={'Site'}
      descriptions={'euNetworks'}
    /> }

   </MapView>   );
};

const styles = StyleSheet.create({
  mapBox: {
    flex:1
  }
});

export default MapViewScreen;

