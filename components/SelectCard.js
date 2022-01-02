import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text} from 'react-native';


const SelectCard = (props) => {

  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity 
      style={{...styles.shadow, ...props.style, ...isSelected ? {backgroundColor:'rgb(227,238,253)'} : {backgroundColor:'white'}}} 
      onPress={() => isSelected ? setIsSelected(false) : setIsSelected(true)}
      activeOpacity={0.3}>
        <Text style={[styles.dateText, isSelected ? {color:'rgb(68,137,247)'} : {color:'black'}]}>
          {props.dateNum}
        </Text>
        <Text style={isSelected ? {color:'rgb(68,137,247)'} : {color:'black'}}>
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
    shadowColor:'black',
    shadowOpacity: 0.10,
    shadowOffset: {width:4, height:4},
    shadowRadius:6,
    backgroundColor:'white',
    borderRadius:10}
});

export default SelectCard;