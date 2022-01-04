import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text} from 'react-native';

import COLORS from '../constants/colors';

const SelectCard = (props) => {

  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity 
      style={{...styles.shadow, 
          ...props.style, 
          ...isSelected ? {backgroundColor: COLORS.primary} : {backgroundColor: COLORS.foreground}}} 
      onPress={() => isSelected ? setIsSelected(false) : setIsSelected(true)}
      activeOpacity={0.3}>
        <Text style={[styles.dateText, isSelected ? {color: COLORS.foreground} : {color: COLORS.primary}]}>
          {props.dateNum}
        </Text>
        <Text style={[styles.dayText, isSelected ? {color: COLORS.foreground} : {color: COLORS.text}]}>
          {props.dayName}
        </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  shadow:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: 'black',
    shadowOpacity: 0.10,
    shadowOffset: {width:4, height:4},
    shadowRadius:6,
    backgroundColor:'white',
    borderRadius:10},

  dateText:{
    fontFamily:'roboto-mono',
    fontSize:30
  },
  dayText:{
    fontFamily:'roboto-mono',
    fontSize:15
  }
});

export default SelectCard;