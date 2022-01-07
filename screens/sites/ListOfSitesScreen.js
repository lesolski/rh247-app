// ./screens/sites/ListOfSitesScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Styling
import COLORS from '../../constants/colors';

const ListOfSitesScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.pinnedMsg}>
        <View style={{ 
                    marginBottom:8, 
                    fle:1,
                    alignItems:'center',
                    justifyContent:'center'}}>
        <Text style={styles.labelText}>List of Sites</Text>
      </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems:'center',
    flex:1
  },
  pinnedMsg:{
    width:'90%',
    height:'25%',
    marginTop:20,
    borderRadius:15,
    borderColor:COLORS.primary,
    borderWidth:1,
  },

  labelText: {
    fontFamily:'roboto-mono', 
    fontSize:20, 
    color:COLORS.text
  }
});

export default ListOfSitesScreen;
