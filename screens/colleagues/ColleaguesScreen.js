// ./screens/ColleaguesScreen.js 

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Alert, TouchableOpacity } from 'react-native';

import ProfileModal from '../../components/ProfileModal';

import COLORS from '../../constants/colors';
import DATA from '../../data/colleagues';
import { Ionicons } from '@expo/vector-icons';


const renderItem = ({ item, props }) => {
  return ( 
    <View style={{flexDirection:'row', marginVertical:6, alignItems:'center', backgroundColor:COLORS.foreground, paddingVertical:10, borderRadius:15, overflow:'hidden'}}>
      <View style={{overflow:'hidden', alignItems:'center', justifyContent:'center', height:50, width:50, backgroundColor:COLORS.primary, borderRadius:25, marginLeft:20, marginRight:20}}>
        <Image 
          source={{uri: item.image}} 
          style={{height:50, width:50}}
        />
      </View>
      <View style={{maxWidth:200}}>
        <Text style={[styles.text, {fontSize:16, color:COLORS.primary}]}>{item.name + ' ' + item.lastname}</Text>
        <Text style={[styles.text, ]}>{item.city}</Text>
        <Text style={[styles.text, ]}>{item.email}</Text>
      </View>
      <View style={{flexDirection:'row', flex:1, justifyContent:'flex-end', marginRight:6}}>
        <TouchableOpacity onPress={() => Alert.alert(item.phone)}>
          <Ionicons 
            name='logo-whatsapp'
            size={36}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
    </View>);
};

const _keyExtractor = (item, index) => item.idx;

const ColleaguesScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={_keyExtractor}
        style={{width:'90%', paddingTop:20}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text: {
    fontFamily:'roboto-mono',
    fontSize:12,
    color:'white' 
  }
});

export default ColleaguesScreen;
