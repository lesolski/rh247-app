// ./components/SiteCard.js

import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';


// Styling imports
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons'


const SiteCard = (props) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.avatar}>
        <Image 
          source={{ uri: 'https://image.shutterstock.com/image-vector/cloud-data-center-abstract-monogram-260nw-1886798524.jpg' }} 
          style={{width:80, height:80}}
        />
      </View>
      <View>
        <View style={{flexDirection: 'row', paddingBottom:10}}>
          <Ionicons />
          <Text style={[styles.text, {fontSize:19, color:COLORS.primary}]}>{props.item.ref}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Ionicons />
          <Text style={styles.text}>{props.item.client}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Ionicons />
          <Text style={styles.text}>{props.item.city}, {props.item.country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection:'row',
    alignItems:'center',
    alignContent:'center',
    padding:10,
    borderColor:COLORS.primary,
    borderWidth:1,
    borderRadius:15,
    marginBottom:8,
    overflow:'hidden'
  },

  avatar: {
    alignItems:'center',
    justifyContent:'center',
    height:80,
    width:80,
    borderRadius:40,
    borderColor:COLORS.primary,
    borderWidth:1,
    marginRight:10,
    overflow:'hidden'
  },

  text: {
    fontFamily:'roboto-mono',   
    color:COLORS.text
  }
});

export default SiteCard;

