// ./screens/sites/AddSiteScreen.js

import React from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput} 
from 'react-native';

// Styling
import COLORS from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

// Redux
import { useDispatch } from 'react-redux';


const AddSiteScreen = (props) => {
  const dispatch = useDispatch(); 

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

      {/* Location Chooser */}
      <View style={{width:'90%', height:240, marginBottom: 12}}>
        <Text style={styles.labelText}>Location</Text>
        <View style={styles.field}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Map')}>
          <Ionicons 
            name="map-outline"
            size={40}
            color={COLORS.primary}
          />
          </TouchableOpacity>
          <Text style={styles.boxText}>Choose on map - click</Text>
        </View>
      </View>

      <View style={{width:'90%', height:240}}>
        <Text style={styles.labelText}>Picture</Text>
        <View style={styles.field}>
          <TouchableOpacity onPress={() => dispatch({type:'addNewSite'})}>
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
