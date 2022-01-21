// ./screens/sites/AddSiteScreen.js

import React from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput,
  Button} 
from 'react-native';

import MapView, { Marker } from 'react-native-maps';

// Styling
import COLORS from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

// Redux
import { useSelector } from 'react-redux';

const AddSiteScreen = (props) => {

  const pinCoords = useSelector(state => state.sites.coords);

  return (
    <ScrollView style={styles.mainContainer} contentContainerStyle={{alignItems:'center'}}>

      {/* Client Name Input*/}
      <View style={[styles.inputFieldBox, {marginTop:30}]}>
        <Text style={styles.labelText}>Client Name</Text>
        <TextInput style={styles.inputText} />
      </View>

      {/* Site Reference Input*/}
      <View style={styles.inputFieldBox}>
        <Text style={styles.labelText}>Site Reference</Text>
        <TextInput style={styles.inputText} />
      </View>


      {/* work on logic on what to show and what not based if location picked or not*/}
      <View style={{width:'90%', height:240, marginBottom: 12}}>
      <Text style={styles.labelText}>Location</Text> 

      {pinCoords ? (
        <MapView 
          region={{
            latitude: pinCoords.latitude,
            longitude: pinCoords.longitude,
            latitudeDelta: 0.0091,
            longitudeDelta: 0.0091,
          }}
          onPress={() => props.navigation.navigate('Map')}
          style={styles.field}
        >
          <Marker 
            coordinate={pinCoords}
            title={'Site'}
            descriptions={'euNetworks'}
          /> 
        </MapView>
        ) : (
        <View style={styles.field}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Map')}>
            <Ionicons 
              name="map-outline"
              size={40}
              color={COLORS.primary}
              />
            </TouchableOpacity>
          <Text style={styles.boxText}>Choose on map - click</Text>
        </View>)}

      </View>

      {/* CAMERA PICKER */}
      <View style={{width:'90%', height:240}}>
        <Text style={styles.labelText}>Picture</Text>
        <View style={styles.field}>
          <TouchableOpacity onPress={() => dispatch({})}>
          <Ionicons 
            name="camera-outline"
            size={40}
            color={COLORS.primary}
          />
          </TouchableOpacity>
          <Text style={styles.boxText}>Click on camera</Text>
        </View>
      </View>

    </ScrollView>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    flexDirection:'column'
  },

  inputFieldBox: {
    marginBottom:12,
    width:'90%',
  },

  labelText: {
    width:'80%',
    fontFamily:'roboto-mono', 
    fontSize:18, 
    color:COLORS.text,
    alignSelf: 'flex-start',
    paddingLeft:10,
    marginBottom:4
  },

  inputText: {
    flex:1, 
    fontSize:18, 
    fontFamily: 'roboto-mono',
    color:COLORS.primary, 
    padding:15, 
    borderColor: 
    COLORS.primary, 
    borderWidth:1,
    borderRadius:15
  },

  field: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primary,
    borderWidth:1,
    borderRadius:15 
  },

  boxText: {
    fontFamily: 'roboto-mono',
    fontSize: 14,
    color: COLORS.primary
  },

});

export default AddSiteScreen;
