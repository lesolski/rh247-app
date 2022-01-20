import React from 'react';
import { View, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

const MapViewScreen = () => {
  return (
    <MapView 
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.mapBox}
    /> 
  );
};

const styles = StyleSheet.create({
  mapBox: {
    flex:1
  }
});

export default MapViewScreen;

